// TestimonialCard.tsx
import React from 'react';
import { StaticImageData } from 'next/image';

interface TestimonialType {
  name: string;
  profession: string;
  image: StaticImageData |string;
  title: string;
  testimonial: string;
}


const TestimonialCard: React.FC<TestimonialType> = ({ name, profession, image, title, testimonial }) => {
    // Check if image is a string or has a 'src' property
    const imageUrl = typeof image === 'string' ? image : image.src;
  return (
    <div className="testimonial-card p-4 bg-white rounded-lg shadow-md">
      <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full mx-auto" />
      <div className="text-center mt-3">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-gray-600 mt-2">{testimonial}</p>
        <p className="text-black font-semibold mt-4">{name}</p>
        <p className="text-gray-500">{profession}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
