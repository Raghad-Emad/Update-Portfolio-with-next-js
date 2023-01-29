import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import classes from "../../styles/about.module.css";
import img01 from "../../public/images/hero.gif";
import img02 from "../../public/images/hero.gif";
import img03 from "../../public/images/hero.gif";
import img04 from "../../public/images/hero.gif";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Experience" />
            {}

            <div className={`${classes.about__experience__left}`}>
              <h3>Experience</h3>
              <div className={`${classes.about__experience__date}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit perspiciatis nam nulla reprehenderit odio omnis
                  voluptatibus deserunt id molestiae neque! Ut exercitationem
                  maxime neque esse, totam velit in molestias placeat!
                </p>
                <span>0000</span>
              </div>

              <div className={`${classes.about__experience__date}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit non quibusdam ut saepe reiciendis! Laudantium
                  amet qui optio eum ea cumque error. Nostrum laboriosam minima
                  ducimus consequatur blanditiis inventore laborum.
                </p>
                <span>0000</span>
              </div>

              <div className={`${classes.about__experience__date}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  illo iusto labore id nisi, eos tenetur beatae soluta tempore
                  natus molestias delectus nostrum ullam, explicabo blanditiis
                  assumenda ipsam saepe ab.
                </p>
                <span>0000</span>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.about__experience__right}`}>
              <h3>Internships</h3>
              <div className={`${classes.about__experience__date}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  vero, sunt nemo nostrum maiores porro vitae ut dicta a
                  cupiditate quidem nulla tempore nihil itaque ipsum, accusamus
                  soluta aliquid tenetur!
                </p>
                <span>0000</span>
              </div>

              <div className={`${classes.about__experience__date}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  totam, placeat explicabo vitae impedit aut cum aperiam
                  similique vero recusandae facere quasi sequi error dignissimos
                  illo soluta, veritatis esse repudiandae!
                </p>
                <span>0000</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
