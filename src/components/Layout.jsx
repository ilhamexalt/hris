// import FooterComponent from "./Footer";
import SidebarDesktop from "./SidebarDesktop";

// eslint-disable-next-line react/prop-types
export default function Layout({ children, className }) {
  return (
    <main className={className}>
      <SidebarDesktop />
      {children}
      {/* <FooterComponent /> */}
    </main>
  );
}
