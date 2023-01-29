import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
      <SectionSubtitle subtitle="Skills" />
        <Row>
         

          <Col lg="6" md="6">


           <div className={`${classes.services__skills}`}>

            <div>
             <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  vero, sunt nemo nostrum maiores porro vitae ut dicta a
                  cupiditate quidem nulla tempore nihil itaque ipsum, accusamus
                  soluta aliquid tenetur!
                  </p>
            </div>

            <div>
             <p> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  vero, sunt nemo nostrum maiores porro vitae ut dicta a
                  cupiditate quidem nulla tempore nihil itaque ipsum, accusamus
                  soluta aliquid tenetur!</p>
            </div>

           </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Web Development" icon="ri-computer-line" />

                <ServicesItem title="App Development" icon="ri-apps-2-line" />

                <ServicesItem
                  title="Mern Stack Development"
                  icon="ri-code-s-slash-line"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
