import React from 'react';
import { Carousel } from 'react-bootstrap';
import d1 from '../../../images/d1.jpg';
import d2 from '../../../images/d2.jpg';
import d3 from '../../../images/d3.jpg'
const CarouselBanner = () => {

    const labelColor = {
        color: 'red'
    }
    return (
        <div >
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        style={{ height: '560px' }}
                        className="d-block w-100 "
                        src={d2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={labelColor}>Welcome to SquaDrone</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '560px' }}
                        className="d-block w-100"
                        src={d1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 style={labelColor}>Welcome to SquaDrone</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '560px' }}
                        className="d-block w-100"
                        src={d3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={labelColor}>Welcome to SquaDrone</h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default CarouselBanner;