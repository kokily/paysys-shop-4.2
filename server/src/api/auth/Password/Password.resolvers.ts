import { Context } from 'koa';
import { PasswordMutationArgs, PasswordResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { getRepository } from 'typeorm';
import { authResolver } from '../../../libs/authenticate';
import { User } from '../../../entities/User';

const resolvers: Resolvers = {
  Mutation: {
    Password: authResolver(
      async (
        _,
        args: PasswordMutationArgs,
        { ctx }: { ctx: Context }
      ): Promise<PasswordResponse> => {
        const { user_id } = ctx.state.user;
        const { password } = args;

        try {
          const user = await getRepository(User).findOne({ id: user_id });

          if (!user) {
            return {
              ok: false,
              error: 'Bad Request',
            };
          }

          await user.setPassword(password);
          await user.save();

          return {
            ok: true,
            error: null,
          };
        } catch (err: any) {
          return {
            ok: false,
            error: err.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
