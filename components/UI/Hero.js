import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/profile.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* hero content */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
             
              <h5 className="mb-4"></h5>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  vero, sunt nemo nostrum maiores porro vitae ut dicta a
                  cupiditate quidem nulla tempore nihil itaque ipsum, accusamus
                  soluta aliquid tenetur!
              </p>

              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  vero, sunt nemo nostrum maiores porro vitae ut dicta a
                  cupiditate quidem nulla tempore nihil itaque ipsum, accusamus
                  soluta aliquid tenetur!
              </p>

              <p className={`${classes.hero__content__degree}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  vero, sunt nemo nostrum maiores porro vitae ut dicta a
                  cupiditate quidem nulla tempore nihil itaque ipsum, accusamus
                  soluta aliquid tenetur!
              </p>

              <div className="mt-5">
                <button className="primary__btn">
                  <Link
                    href="#" target="_blank"
                  >
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* hero img */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">+1 Year</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
