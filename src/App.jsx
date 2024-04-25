import Layout from "../src/components/ui/Layout";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Sections/Products";
import Property from "./components/Sections/Property";
import Project from "./components/Sections/Project";
import Overview from "./components/Sections/Overview";
import Future from "./components/Sections/Future";
import Contact from "./components/Sections/Contact";

import Footer from "./Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
      {/* <Hero />
      <Products />
      <Property />
      <Project />
      <Overview />
      <Future />
      <Contact />
    <Footer /> */}
    </main>
  );
}

export default App;
