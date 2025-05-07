import Navbar from "@/components/navbar/navbar";
import SidebarContainer from "@/components/sidebar/SidebarContainer";

const logoSrc = "/assets/images/b.jpg"; // or dynamically from props/config
const brandName = "Selfeey";
const avatarSrc = "/assets/images/profile1.jpg";

export default function MainLayout({ children }) {
  return (
    <SidebarContainer
      logoSrc={logoSrc}
      brandName={brandName}
      avatarSrc={avatarSrc}
    >
      <Navbar/>
      {children}
    </SidebarContainer>
  );
}
