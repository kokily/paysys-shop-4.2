import { getManager } from 'typeorm';
import { ListLaunchResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Bill } from '../../../entities/Bill';
import { adminResolver } from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    ListLaunch: adminResolver(async (_, __): Promise<ListLaunchResponse> => {
      try {
        const list = await getManager().createQueryBuilder(Bill, 'bills');
        const target = await list.getMany();
        let launches: any = [];

        for (let i = 0; i < target.length; i++) {
          for (let j = 0; j < target[i].items.length; j++) {
            if (target[i].items[j].name === '도시락') {
              const item = {
                title: target[i].title,
                native: target[i].items[j].native,
                name: target[i].items[j].name,
                price: target[i].items[j].price,
                count: target[i].items[j].count,
                amount: target[i].items[j].amount,
              };

              launches.push(item);
            }
          }
        }

        return {
          ok: true,
          error: null,
          launches,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          launches: null,
        };
      }
    }),
  },
};

export default resolvers;
