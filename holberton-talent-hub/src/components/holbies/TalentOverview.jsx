/* eslint-disable jsx-a11y/alt-text */
import { SlideWrapper } from './TalentOverview.styles';
import { usersTalent } from './TalentOverview.data';
import { UserCard } from '../user-card/UserCard';

export const TalentOverview = () => {
  return (
    <SlideWrapper>
      <div className="job-slide">
        <div className="job-container">
        </div>
      </div>

      <section className="talent-container">
        {usersTalent.map((user, key) => (
          <UserCard key={key} {...user} />
        ))}
      </section>
    </SlideWrapper>
  );
};
