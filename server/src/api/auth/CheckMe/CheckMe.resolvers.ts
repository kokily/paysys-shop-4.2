import { Context } from 'koa';
import { CheckMeResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { authResolver } from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    CheckMe: authResolver(
      async (_, __, { ctx }: { ctx: Context }): Promise<CheckMeResponse> => {
        const { userId, username, admin } = ctx.state.user;

        return {
          ok: true,
          error: null,
          me: {
            userId,
            username,
            admin,
          },
        };
      }
    ),
  },
};

export default resolvers;
