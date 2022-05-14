import Navbar from '@components/Navbar';
import SEO from '@components/SEO';
import Footer from '@components/Footer';

export function Layout({ title, description, twitter, openGraph, children }) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        twitter={twitter}
        openGraph={openGraph}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
