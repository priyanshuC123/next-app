import React from 'react';
import Slider from 'react-slick';
import { testimonials, TestimonialType } from './TestimonialData'; // Adjust the import path as needed
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type Props = {
  testimonial: TestimonialType;
};

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="text-black bg-white p-6 rounded-lg shadow-lg">
      <img src={testimonial.image} alt={testimonial.name} className="w-full h-auto mb-4" />
      <h5 className="text-xl font-bold mb-3">{testimonial.title}</h5>
      <p className="mb-4">{testimonial.testimonial}</p>
      <p className="font-semibold">{testimonial.name}</p>
      <p className="text-sm text-gray-600">{testimonial.profession}</p>
    </div>
  );
};

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </Slider>
  );
};

const SampleNextArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      />
    );
  };
  

export default Testimonial;
