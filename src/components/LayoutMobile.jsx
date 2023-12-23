// import FooterComponent from "./Footer";
import MenuBarMobile from "./MenuBarMobile";

// eslint-disable-next-line react/prop-types
export default function LayoutMobile({ children, className }) {
  return (
    <main className={className}>
      <MenuBarMobile />
      {children}
      {/* <FooterComponent /> */}
    </main>
  );
}
