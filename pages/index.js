import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </Fragment>
  )
}