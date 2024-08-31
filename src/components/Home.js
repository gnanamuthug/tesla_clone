import React from 'react'
import Section from './Section'
import styled from 'styled-components';
import Header from './Header';



const Home = () => {
  return (
    <Container>
      <Section 
      title="Model S"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftButton="Custom Order"
      rightButton="Existing Inventory"
      />
      <Section 
      title="Model X"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftButton="Custom Order"
      rightButton="Existing Inventory"
      />
      <Section 
      title="Model Y"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftButton="Custom Order"
      rightButton="Existing Inventory"
      />
      <Section 
      title="Model 3"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftButton="Custom Order"
      rightButton="Existing Inventory"
      />
      <Section
        title="Lowest  Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftButton="Order now"
        rightButton="Learn more"
      />
      <Section
        title="Solar for  New Roofs"
        description="Solar Roof Costs Less than A New Roof Plus Solar Panels "
        backgroundImg="solar-roof.jpg"
        leftButton="Order now"
        rightButton="Learn more"
      />
      <Section
        title="Accessories"
        description="Solar Roof Costs Less than A New Roof Plus Solar Panels"
        backgroundImg="accessories.jpg"
        leftButton="Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
z-index:10;
`