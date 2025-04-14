import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 200px)", padding: "2rem 1rem" }}>
        {children}
        </main>
      <Footer />
    </>
  );
}