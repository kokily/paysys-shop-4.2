import { getManager } from 'typeorm';
import { ListLaunchResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Bill } from '../../../entities/Bill';
import { adminResolver } from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    ListLaunch: adminResolver(async (_, __): Promise<ListLaunchResponse> => {
      try {
        const list = await getManager()
          .createQueryBuilder(Bill, 'bills')
          .orderBy('bills.created_at', 'ASC');
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
                created_at: target[i].created_at,
              };

              launches.push(item);
            }
          }
        }

        const salmons = launches.filter((data) => data.price === 30000);
        const eels = launches.filter((data) => data.price === 25000);
        const fleshes = launches.filter((data) => data.price === 20000);

        let salmon = {
          count: 0,
          amount: 0,
        };
        let eel = {
          count: 0,
          amount: 0,
        };
        let flesh = {
          count: 0,
          amount: 0,
        };

        salmons.map((data) => {
          salmon.count += data.count;
          salmon.amount += data.amount;
        });
        eels.map((data) => {
          eel.count += data.count;
          eel.amount += data.amount;
        });
        fleshes.map((data) => {
          flesh.count += data.count;
          flesh.amount += data.amount;
        });

        return {
          ok: true,
          error: null,
          launches,
          salmon,
          eel,
          flesh,
        };
      } catch (err: any) {
        return {
          ok: false,
          error: err.message,
          launches: null,
          salmon: {
            count: 0,
            amount: 0,
          },
          eel: {
            count: 0,
            amount: 0,
          },
          flesh: {
            count: 0,
            amount: 0,
          },
        };
      }
    }),
  },
};

export default resolvers;
