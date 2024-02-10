import img1 from '../../public/assets/img1.jpeg';
import img2 from '../../public/assets/img2.jpeg';
import img3 from '../../public/assets/img3.jpeg';

export interface TestimonialType {
  name: string;
  profession: string;
  image: string;
  title: string;
  testimonial: string;
}
export const testimonials = [
  {
    name: "Mary Johnson",
    profession: "CEO of TechCraft Solutions",
    image: img1.src,
    title: "Exceptional Solutions, Exceeded Expectations!",
    testimonial:
      "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
  },
  {
    name: "Mark Williams",
    profession: "CEO of InnovateNow Inc",
    image: img2.src,
    title: "Transformed Our Business with Innovative Tech!",
    testimonial:
      "Kalachhetra has revolutionized the way I showcase my artwork. The platform has given me the opportunity to reach a wider audience and connect with art enthusiasts from around the world. I am grateful for the seamless experience and the exposure it has provided for my artistic journey.",
  },
  {
    name: "Emily Clark",
    profession: "CEO of Visionary Apps",
    image: img3.src,
    title: "Sculpted User Experiences Beyond Imagination!",
    testimonial:
      "As a musician, Kalachhetra has been a game-changer for me. It has allowed me to showcase my music, collaborate with other artists, and connect with music lovers who appreciate my work. The platform's user-friendly interface and the supportive community make it an ideal place for artists like me to thrive.",
  },
  {
    name: "brad mackklum",
    profession: "CEO of SpaceY",
    image: img1.src,
    title: "Exceptional Solutions, Exceeded Expectations!",
    testimonial:
      "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
  },
  {
    name: "V k Singh",
    profession: "CEO of Google",
    image: img2.src,
    title: "Transformed Our Business with Innovative Tech!",
    testimonial:
      "Kalachhetra has revolutionized the way I showcase my artwork. The platform has given me the opportunity to reach a wider audience and connect with art enthusiasts from around the world. I am grateful for the seamless experience and the exposure it has provided for my artistic journey.",
  },
  {
    name: "John hardison",
    profession: "CEO of facemap",
    image: img3.src,
    title: "Sculpted User Experiences Beyond Imagination!",
    testimonial:
      "As a musician, Kalachhetra has been a game-changer for me. It has allowed me to showcase my music, collaborate with other artists, and connect with music lovers who appreciate my work. The platform's user-friendly interface and the supportive community make it an ideal place for artists like me to thrive.",
  },
];