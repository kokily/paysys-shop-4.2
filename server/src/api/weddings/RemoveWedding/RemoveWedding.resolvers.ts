import { getRepository } from 'typeorm';
import { RemoveWeddingMutationArgs, RemoveWeddingResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import { Wedding } from '../../../entities/wedding';
import { Company } from '../../../entities/wedding/Company';
import { Convention } from '../../../entities/wedding/Convention';
import { Event } from '../../../entities/wedding/Event';
import { Hanbok } from '../../../entities/wedding/Hanbok';
import { Meal } from '../../../entities/wedding/Meal';
import { Present } from '../../../entities/wedding/Present';
import { Reserve } from '../../../entities/wedding/Reserve';

const resolvers: Resolvers = {
  Mutation: {
    RemoveWedding: adminResolver(
      async (_, args: RemoveWeddingMutationArgs): Promise<RemoveWeddingResponse> => {
        const { id } = args;

        try {
          await getRepository(Wedding).delete(id);
          await getRepository(Company).delete({ weddingId: id });
          await getRepository(Convention).delete({ weddingId: id });
          await getRepository(Event).delete({ weddingId: id });
          await getRepository(Hanbok).delete({ weddingId: id });
          await getRepository(Meal).delete({ weddingId: id });
          await getRepository(Present).delete({ weddingId: id });
          await getRepository(Reserve).delete({ weddingId: id });

          return {
            ok: true,
            error: null,
          };
        } catch (err) {
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
