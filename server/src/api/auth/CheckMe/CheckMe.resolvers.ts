import { Context } from 'koa';
import { CheckMeResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { authResolver } from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    CheckMe: authResolver(
      async (_, __, { ctx }: { ctx: Context }): Promise<CheckMeResponse> => {
        const { user_id, username, admin } = ctx.state.user;

        return {
          ok: true,
          error: null,
          me: {
            user_id,
            username,
            admin,
          },
        };
      }
    ),
  },
};

export default resolvers;
