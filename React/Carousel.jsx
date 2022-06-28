import React from 'react';
import cn from 'classnames';
import uniqueId from 'lodash/uniqueId';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 1,
    }
  }

  switchNext = () => {
    const { length } = this.props.images;
    this.setState( (state) => {
      const { activeSlide } = state;
      return { activeSlide: activeSlide < length ? activeSlide + 1 : 1}
    })
  }

  switchPrev = () => {
    const { length } = this.props.images;
    this.setState((state) => {
      const { activeSlide } = state;
      return { activeSlide: activeSlide > 1 ? activeSlide - 1 : length }
    })
  }

  showActiveSlide = (index) => {
     return cn('carousel-item', {
      'active': index + 1 === this.state.activeSlide
    });
  };

  render() {
    const images = this.props.images;
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className='carousel-inner'>
          {React.Children.map(images, (item, index) => {
            return (
              <div key={uniqueId()} className={this.showActiveSlide(index)}>
                <img alt="" className="d-block w-100" src={item} />
              </div>
            )
          })}
        </div>

        <button className="carousel-control-prev" 
        data-bs-target="#carousel" type="button" 
        data-bs-slide="prev"
          onClick={this.switchPrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" 
        data-bs-target="#carousel" 
        type="button" 
        data-bs-slide="next"
          onClick={this.switchNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    )
  }
}