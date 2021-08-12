import ProfileSection from '../components/organisms/ProfileSection';
import SkillSection from '../components/organisms/SkillSection';
import WorksSection from '../components/organisms/WorksSection';
import Mvsection from '../components/organisms/MvSection';

export default function Top() {
  return (
    <div>
      {/* MV Section */}
      <Mvsection />
      {/* Profile Section*/}
      <ProfileSection />
      {/* Skill Section*/}
      <SkillSection />
      {/* Works Section*/}
      <WorksSection />
    </div>
  );
}
