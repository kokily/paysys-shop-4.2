import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import Company from '../../components/expense/common/Company';
import Convention from '../../components/expense/common/Convention';
import Event from '../../components/expense/common/Event';
import ExpenseTemplate from '../../components/expense/common/ExpenseTemplate';
import Hanbok from '../../components/expense/common/Hanbok';
import Meal from '../../components/expense/common/Meal';
import Present from '../../components/expense/common/Present';
import Reserve from '../../components/expense/common/Reserve';
import useUpdateExpensive from './hooks/useUpdateExpense';

function UpdateExpensePage() {
  const {
    // common
    onChange,
    loading,
    error,
    // Expensive Wedding
    husband_name,
    bride_name,
    wedding_at: startDate,
    event_at,
    setStartDate,
    // Convention
    rental_husband,
    rental_bride,
    sword_husband,
    sword_bride,
    glove_husband,
    glove_bride,
    bouquet_husband,
    bouquet_bride,
    ceremony_husband,
    ceremony_bride,
    // Company
    company_husband,
    company_bride,
    rooftop_husband,
    rooftop_bride,
    owner_woman_husband,
    owner_woman_bride,
    owner_man_husband,
    owner_man_bride,
    select_husband,
    select_bride,
    frame_husband,
    frame_bride,
    dress_husband,
    dress_bride,
    hairpin_husband,
    hairpin_bride,
    wig_husband,
    wig_bride,
    video_husband,
    video_bride,
    etc_husband,
    etc_bride,
    // Hanbok
    hanbok_pre_husband,
    hanbok_pre_bride,
    hanbok_post_husband,
    hanbok_post_bride,
    // Event
    play_husband,
    play_bride,
    anthem_husband,
    anthem_bride,
    moderator_husband,
    moderator_bride,
    officiate_husband,
    officiate_bride,
    // Meal
    meals,
    meals_price,
    meals_num_husband,
    meals_num_bride,
    // Present
    present,
    present_price,
    present_num_husband,
    present_num_bride,
    // Reserve
    reserve,
    reserve_pay,
    // Button
    onBack,
    onSubmit,
  } = useUpdateExpensive();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ExpenseTemplate onBack={onBack} onSubmit={onSubmit} edit>
        <Convention
          rental_husband={rental_husband}
          rental_bride={rental_bride}
          sword_husband={sword_husband}
          sword_bride={sword_bride}
          glove_husband={glove_husband}
          glove_bride={glove_bride}
          bouquet_husband={bouquet_husband}
          bouquet_bride={bouquet_bride}
          ceremony_husband={ceremony_husband}
          ceremony_bride={ceremony_bride}
          onChange={onChange}
        />
        <Company
          company_husband={company_husband}
          company_bride={company_bride}
          rooftop_husband={rooftop_husband}
          rooftop_bride={rooftop_bride}
          owner_woman_husband={owner_woman_husband}
          owner_woman_bride={owner_woman_bride}
          owner_man_husband={owner_man_husband}
          owner_man_bride={owner_man_bride}
          select_husband={select_husband}
          select_bride={select_bride}
          frame_husband={frame_husband}
          frame_bride={frame_bride}
          dress_husband={dress_husband}
          dress_bride={dress_bride}
          hairpin_husband={hairpin_husband}
          hairpin_bride={hairpin_bride}
          wig_husband={wig_husband}
          wig_bride={wig_bride}
          video_husband={video_husband}
          video_bride={video_bride}
          etc_husband={etc_husband}
          etc_bride={etc_bride}
          onChange={onChange}
        />
        <Event
          play_husband={play_husband}
          play_bride={play_bride}
          anthem_husband={anthem_husband}
          anthem_bride={anthem_bride}
          moderator_husband={moderator_husband}
          moderator_bride={moderator_bride}
          officiate_husband={officiate_husband}
          officiate_bride={officiate_bride}
          onChange={onChange}
        />
        <Hanbok
          hanbok_pre_husband={hanbok_pre_husband}
          hanbok_pre_bride={hanbok_pre_bride}
          hanbok_post_husband={hanbok_post_husband}
          hanbok_post_bride={hanbok_post_bride}
          onChange={onChange}
        />
        <Meal
          meals={meals}
          meals_price={meals_price}
          meals_num_husband={meals_num_husband}
          meals_num_bride={meals_num_bride}
          onChange={onChange}
        />
        <Present
          present={present}
          present_price={present_price}
          present_num_husband={present_num_husband}
          present_num_bride={present_num_bride}
          onChange={onChange}
        />
        <Reserve reserve={reserve} reserve_pay={reserve_pay} onChange={onChange} />
      </ExpenseTemplate>
    </PageTemplate>
  );
}

export default UpdateExpensePage;
