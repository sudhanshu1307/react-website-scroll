import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

function Services({ id, heading, icon1, cardHeading, cardPara }) {
  return (
    <ServicesContainer id={id}>
      <ServicesH1>{heading}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>{cardHeading}</ServicesH2>
          <ServicesP>{cardPara}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>{cardHeading}</ServicesH2>
          <ServicesP>{cardPara}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>{cardHeading}</ServicesH2>
          <ServicesP>{cardPara}</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
