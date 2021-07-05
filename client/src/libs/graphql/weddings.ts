import { gql } from '@apollo/client';

// List Weddings API
export const LIST_WEDDINGS = gql`
  query ListWeddings($cursor: ID, $date: String) {
    ListWeddings(cursor: $cursor, date: $date) {
      ok
      error
      weddings {
        id
        husband_name
        bride_name
        wedding_at
        event_at
        created_at
      }
    }
  }
`;

// Read Wedding API
export const READ_WEDDING = gql`
  query ReadWedding($id: ID!) {
    ReadWedding(id: $id) {
      ok
      error
      wedding {
        id
        husband_name
        husband_image
        bride_name
        bride_image
        wedding_at
        cost_husband
        cost_bride
        meal_husband
        meal_bride
        present_husband
        present_bride
        reserve_husband
        reserve_bride
        event_at
        created_at
      }
      convention {
        id
        rental_husband
        rental_bride
        sword_husband
        sword_bride
        glove_husband
        glove_bride
        bouquet_husband
        bouquet_bride
        ceremony_husband
        ceremony_bride
      }
      company {
        id
        company_husband
        company_bride
        rooftop_husband
        rooftop_bride
        owner_woman_husband
        owner_woman_bride
        owner_man_husband
        owner_man_bride
        select_husband
        select_bride
        frame_husband
        frame_bride
        dress_husband
        dress_bride
        hairpin_husband
        hairpin_bride
        wig_husband
        wig_bride
        video_husband
        video_bride
        etc_husband
        etc_bride
      }
      hanbok {
        id
        hanbok_pre_husband
        hanbok_pre_bride
        hanbok_post_husband
        hanbok_post_bride
      }
      event {
        id
        play_husband
        play_bride
        anthem_husband
        anthem_bride
        moderator_husband
        moderator_bride
        officiate_husband
        officiate_bride
      }
      meal {
        id
        meals
        meals_price
        meals_num_husband
        meals_num_bride
      }
      present {
        id
        present
        present_price
        present_num_husband
        present_num_bride
      }
      reserve {
        id
        reserve
        reserve_pay
      }
    }
  }
`;

// Remove Wedding API
export const REMOVE_WEDDING = gql`
  mutation RemoveWedding($id: ID!) {
    RemoveWedding(id: $id) {
      ok
      error
    }
  }
`;
