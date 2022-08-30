import Main from "./Home/Main";
import Description from "./Home/Description";
import Stats from "./Home/Stats";
import Partners from "./Home/Partners";
import Connection from "./Home/Connection";
import Form from "./Home/Form";
import Features from "./Home/Features";

// import {
//   Main,
//   Description,
//   Stats,
//   Features,
//   Partners,
//   Connection,
//   Form,
// } from "./Home/";

const Home = () => {
  return (
    <main>
      <Main />
      <Description />
      <Stats />
      <Features />
      <Partners />
      <Connection />
      <Form />
    </main>
  );
};

export default Home;
