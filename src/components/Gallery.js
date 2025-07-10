import React from 'react';
import Slider from 'react-slick';
import './Gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const galleryItems = [
  { src: "/images/chessaward.jpeg", caption: "🏆 Cybage Chess Champion (2024)" },
  { src: "/images/metacertification.jpeg", caption: "📜 Meta Front-End Developer" },
  { src: "/images/swags.jpeg", caption: "💻 Hacktoberfest Contributor" },
  { src: "/images/publication.jpeg", caption: "📝 GIS Science Journal Publication" },
  { src: "/images/internship1.jpeg", caption: "🧑 Campus Ambassador – ReachTech" },
  { src: "/images/internship3.jpeg", caption: "✍️ Content Writing Intern – Careers360" },
  { src: "/images/internship2.jpeg", caption: " 📃Letter of Recommendation – Reach Technologies" },
  { src: "/images/volunteer.jpeg", caption:"🏆Volunteership Award " },
  { src: "/images/chess.jpg", caption:"College Chess Certificate"}
  ];

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="gallery" id="gallery">
      <h2>Certifications & Awards</h2>
      <Slider {...settings}>
        {galleryItems.map((item, index) => (
          <div className="gallery-slide" key={index}>
            <img src={item.src} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Gallery;
