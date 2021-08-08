import MvSection from '../component/sections/top/MvSection';
import ProfileSection from '../component/sections/top/ProfileSection';
import SkillSection from '../component/sections/top/SkillSection';
import WorksSection from '../component/sections/top/WorksSection';
import ContactSection from '../component/organisms/ContactSection';

export default function Top() {
  return (
    <div>
      {/* MV Section */}
      <MvSection />
      {/* Profile Section*/}
      <ProfileSection />
      {/* Skill Section*/}
      <SkillSection />
      {/* Works Section*/}
      <WorksSection />
    </div>
  );
}
