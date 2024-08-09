import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import t1 from "../../../assets/testimonials/01.jpg";
import t2 from "../../../assets/testimonials/02.jpg";
import t3 from "../../../assets/testimonials/03.jpg";
import t4 from "../../../assets/testimonials/04.jpg";
import t5 from "../../../assets/testimonials/05.jpg";
import t6 from "../../../assets/testimonials/06.jpg";

function Testimonial() {
  const testimonialData = [
    {
      _id: 1,
      img: t1,
      name: "StartUp",
      description:
        "I initially tried handling employer-employee disputes with generic templates I found online, but they fell short. Then I discovered The Salt Legal templates. Their comprehensive and expertly crafted documents made all the difference, providing clear guidance and best practices. It was a game-changer for our HR team.",
    },
    {
      _id: 2,
      img: t2,
      name: "Legal",
      description:
        "For our start up, generic templates just weren't cutting it, especially when it came to cyber laws. Finding The Salt Legal was a relief. Their detailed and well-structured templates covered everything we needed, helping us navigate complex regulations effortlessly. It's been a crucial resource for our legal compliance.",
    },
    {
      _id: 3,
      img: t3,
      name: "Human Resource",
      description:
        "Dealing with intellectual property issues using basic templates was frustrating and risky. The Salt Legal IP templates were a lifesaver. They were thorough, professional, and easy to use, ensuring our assets were well-protected. I highly recommend their services to anyone needing reliable legal documents.",
    },
    {
      _id: 4,
      img: t4,
      name: "IPR",
      description:
        "Generic privacy law templates were not sufficient for our needs. The Salt Legal provided us with detailed, user-friendly templates that ensured full compliance and data protection. Their resources were clear and precise, making a significant difference for our company. Highly recommended for anyone dealing with privacy laws.",
    },
    {
      _id: 5,
      img: t5,
      name: "Marketing & Sales",
      description:
        "Navigating labour laws with basic templates was overwhelming. The Salt Legal comprehensive templates were exactly what we needed. They were detailed, easy to understand, and made the complex regulations manageable. Their professional support was invaluable, and I highly recommend their services.",
    },
    {
      _id: 6,
      img: t6,
      name: "Finance & Accounting",
      description:
        "As a start-up, we struggled with finding quality legal templates. The Salt Legal start-up advisory templates were a breath of fresh air. They covered IT and cyber laws in detail, helping us set up solid legal foundations. Their templates were clear, thorough, and incredibly helpful. A must-have for any new business.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: null,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      <h2>
        A Legacy of <span>excellence</span> and Reliability
      </h2>
      <p>Be our next customer success story. </p>

      <Slider {...settings} className="slider-div">
        {testimonialData.map((testimonial) => (
          <div className="pad-20">
            <div className="testimonial-slide" key={testimonial._id}>
              <p>"{testimonial.description}"</p>
              <div>
                <img
                  src={testimonial.img}
                  size="3x"
                  style={{ marginRight: "20px" }}
                />
                <h3> ~ {testimonial.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
