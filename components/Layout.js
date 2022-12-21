import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, navBar }) {
  return (
    <>
      <Navbar props={navBar.data} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
