import ProfileSection from '../components/top/ProfileSection/ProfileSection';
import SkillSection from '../components/top/SkillSection';
import WorksSection from '../components/top/WorksSection';
import Mvsection from '../components/top/MVSection/MvSection';

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
