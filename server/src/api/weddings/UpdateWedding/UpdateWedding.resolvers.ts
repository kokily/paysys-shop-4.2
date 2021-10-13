import { getRepository } from 'typeorm';
import { UpdateWeddingMutationArgs, UpdateWeddingResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import { maskingName } from '../../../libs/utils';
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
    UpdateWedding: adminResolver(
      async (_, args: UpdateWeddingMutationArgs): Promise<UpdateWeddingResponse> => {
        const { id } = args;

        try {
          await getRepository(Wedding).update(
            { id },
            {
              husband_name: maskingName(args.husband_name),
              bride_name: maskingName(args.bride_name),
              wedding_at: args.wedding_at,
              event_at: args.event_at,
              cost_husband: args.cost_husband,
              cost_bride: args.cost_bride,
              meal_husband: args.meal_husband,
              meal_bride: args.meal_bride,
              present_husband: args.present_husband,
              present_bride: args.present_bride,
              reserve_husband: args.reserve_husband,
              reserve_bride: args.reserve_bride,
            }
          );
          await getRepository(Company).update(
            { weddingId: id },
            {
              company_husband: args.company_husband,
              company_bride: args.company_bride,
              rooftop_husband: args.rooftop_husband,
              rooftop_bride: args.rooftop_bride,
              owner_woman_husband: args.owner_woman_husband,
              owner_woman_bride: args.owner_woman_bride,
              owner_man_husband: args.owner_man_husband,
              owner_man_bride: args.owner_man_bride,
              select_husband: args.select_husband,
              select_bride: args.select_bride,
              frame_husband: args.frame_husband,
              frame_bride: args.frame_bride,
              dress_husband: args.dress_husband,
              dress_bride: args.dress_bride,
              hairpin_husband: args.hairpin_husband,
              hairpin_bride: args.hairpin_bride,
              wig_husband: args.wig_husband,
              wig_bride: args.wig_bride,
              video_husband: args.video_husband,
              video_bride: args.video_bride,
              etc_husband: args.etc_husband,
              etc_bride: args.etc_bride,
              weddingId: id,
            }
          );
          await getRepository(Convention).update(
            {
              weddingId: id,
            },
            {
              rental_husband: args.rental_husband,
              rental_bride: args.rental_bride,
              sword_husband: args.sword_husband,
              sword_bride: args.sword_bride,
              glove_husband: args.glove_husband,
              glove_bride: args.glove_bride,
              bouquet_husband: args.bouquet_husband,
              bouquet_bride: args.bouquet_bride,
              ceremony_husband: args.ceremony_husband,
              ceremony_bride: args.ceremony_bride,
              weddingId: id,
            }
          );
          await getRepository(Event).update(
            {
              weddingId: id,
            },
            {
              play_husband: args.play_husband,
              play_bride: args.play_bride,
              anthem_husband: args.anthem_husband,
              anthem_bride: args.anthem_bride,
              moderator_husband: args.moderator_husband,
              moderator_bride: args.moderator_bride,
              officiate_husband: args.officiate_husband,
              officiate_bride: args.officiate_bride,
              weddingId: id,
            }
          );
          await getRepository(Hanbok).update(
            {
              weddingId: id,
            },
            {
              hanbok_pre_husband: args.hanbok_pre_husband,
              hanbok_pre_bride: args.hanbok_pre_bride,
              hanbok_post_husband: args.hanbok_post_husband,
              hanbok_post_bride: args.hanbok_post_bride,
            }
          );
          await getRepository(Meal).update(
            {
              weddingId: id,
            },
            {
              meals: args.meals,
              meals_price: args.meals_price,
              meals_num_husband: args.meals_num_husband,
              meals_num_bride: args.meals_num_bride,
              weddingId: id,
            }
          );
          await getRepository(Present).update(
            {
              weddingId: id,
            },
            {
              present: args.present,
              present_price: args.present_price,
              present_num_husband: args.present_num_husband,
              present_num_bride: args.present_num_bride,
              weddingId: id,
            }
          );
          await getRepository(Reserve).update(
            {
              weddingId: id,
            },
            {
              reserve: args.reserve,
              reserve_pay: args.reserve_pay,
              weddingId: id,
            }
          );

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
