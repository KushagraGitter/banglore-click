import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src:'https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_7557.jpg?alt=media&token=f70cbd86-c241-43a3-9372-fb60522527a3',
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src:'https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2Ffashion%2FSUB3088.jpg?alt=media&token=963d5d70-5690-4b68-89b9-50d832c48c65',  
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:'https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_3238.jpg?alt=media&token=82b10ce8-c821-4c95-ae0a-4c884e752b20',
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src:'https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_3238.jpg?alt=media&token=82b10ce8-c821-4c95-ae0a-4c884e752b20',
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src:'https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/MainContent%2FEvents%2FDSC_3238.jpg?alt=media&token=82b10ce8-c821-4c95-ae0a-4c884e752b20',
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class PhotoSlide extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
        <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 300px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default PhotoSlide;
