import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 160px)", padding: "1rem" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}