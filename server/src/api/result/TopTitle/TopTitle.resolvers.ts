import { getManager } from 'typeorm';
import { TopTitleQueryArgs, TopTitleResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Bill } from '../../../entities/Bill';
import { adminResolver } from '../../../libs/authenticate';
import { getSortedList } from '../../../libs/utils';

const resolvers: Resolvers = {
  Query: {
    TopTitle: adminResolver(
      async (_, args: TopTitleQueryArgs): Promise<TopTitleResponse> => {
        const { start_date, end_date } = args;

        try {
          const query = await getManager()
            .createQueryBuilder(Bill, 'bills')
            .where('bills.created_at >= :start_date AND bills.created_at <= :end_date', {
              start_date,
              end_date,
            });

          const list = await query.getMany();

          const sortData = getSortedList(list);
          const titles = sortData.slice(0, 19);

          return {
            ok: true,
            error: null,
            titles,
          };
        } catch (err: any) {
          return {
            ok: false,
            error: err.message,
            titles: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
