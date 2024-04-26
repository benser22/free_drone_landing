import Layout from "../src/components/ui/Layout";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Sections/Products";
import Explore from "./components/Sections/Explore";
import Overview from "./components/Sections/Overview";
import Project from "./components/Sections/Project";
import Future from "./components/Sections/Future";
import Contact from "./components/Sections/Contact";

import Footer from "./Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Hero />
        <Products />
        <Explore />
        <Overview />
        <Project />
      </Layout>
      {/* <Hero />
      <Products />
      <Property />
      <Future />
      <Contact />
    <Footer /> */}
    </main>
  );
}

export default App;
