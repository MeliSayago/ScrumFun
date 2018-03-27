import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';



export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={90}
        totalSlides={3}
      >        
        <Slider>
          <Slide index={0}><h1>Hola</h1></Slide>
          <Slide index={1}><h1>Hola</h1></Slide>
          <Slide index={2}><h1>Hola</h1></Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
