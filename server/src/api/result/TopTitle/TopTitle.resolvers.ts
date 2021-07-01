import { getManager, getRepository } from 'typeorm';
import { TopTitleResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Bill } from '../../../entities/Bill';
import { adminResolver } from '../../../libs/authenticate';
import { getSortedCount } from '../../../libs/utils';

const resolvers: Resolvers = {
  Query: {
    TopTitle: adminResolver(async (_, __): Promise<TopTitleResponse> => {
      try {
        type ValueType = {
          name: string;
          count: number;
        };

        const list = await getRepository(Bill).find();

        let prevList: string[] = [];
        let sortData: ValueType[] = [];

        list.map((bill) => {
          prevList.push(bill.title);
        });

        const nextList = getSortedCount(prevList);

        sortData = nextList.map((item) => ({
          name: item[0],
          count: item[1],
        }));

        return {
          ok: true,
          error: null,
          titles: sortData.slice(0, 19),
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          titles: null,
        };
      }
    }),
  },
};

export default resolvers;
