import { ApolloServer, gql } from 'apollo-server-koa';
import Koa, { Context } from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import serve from 'koa-static';
import send from 'koa-send';
import path from 'path';
import upload from './libs/upload';

const { default: enforceHttps } = require('koa-sslify');

const app = new Koa();
const router = new Router();
const rootDir = path.resolve(process.cwd(), './../client/build');

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? 'https://paysys.shop'
        : 'http://localhost:3000',
  })
);

if (process.env.NODE_ENV === 'production') {
  app.use(
    enforceHttps({
      port: 443,
    })
  );
}

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(rootDir));
app.use(async (ctx: Context) => {
  if (
    ctx.status === 404 &&
    ctx.path.indexOf('/graphql') !== 0 &&
    ctx.path.indexOf('/upload') !== 0
  ) {
    await send(ctx, 'index.html', {
      root: rootDir,
    });
  }
});

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
};

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});

router.get('/graphql', apollo.getMiddleware());
router.post('/graphql', apollo.getMiddleware());
router.use('/upload', upload.routes());

apollo.applyMiddleware({ app, cors: false });

export default app;
