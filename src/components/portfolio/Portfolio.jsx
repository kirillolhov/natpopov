import React from 'react'
import IMG1 from '../../assets/alc.png'
import IMG2 from '../../assets/todo.png'
import IMG3 from '../../assets/shelter.png'
import IMG4 from '../../assets/fake.png'
import IMG5 from '../../assets/news.png'
import IMG6 from '../../assets/math.png'

import './portfolio.css'

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Winter Landscape',
      img: IMG1,
      description:
        'A serene winter landscape adorned with elegant Christmas trees, evoking a sense of tranquility with softly falling snowflakes.',
      technologies: 'Ruby on Rails | SCSS',
      link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
      github: 'https://github.com/Meri-MG/school',
    },
    {
      id: 2,
      title: 'Daisies',
      img: IMG4,
      description:
        'Daisies blooming in vibrant watercolors, conveying the essence of simplicity and natural beauty in every petal.',
    },
    {
      id: 3,
      title: 'Winter Landscape',
      img: IMG2,
      description:
        'A festive scene capturing the magic of a snowy winter, framed by glistening Christmas trees, radiating warmth and holiday cheer.',
    },
    {
      id: 4,
      title: 'Zebra',
      img: IMG3,
      description:
        'A majestic zebra rendered in fluid strokes, capturing the grace and uniqueness of its monochrome stripes against a backdrop of natural hues.',
    },
    {
      id: 5,
      title: 'Baby Lion',
      img: IMG5,
      description:
        'A playful portrayal of a young lion cub, exuding innocence and curiosity, painted with tender brushstrokes that accentuate its youthful charm."',
    },
    {
      id: 6,
      title: 'Dog',
      img: IMG6,
      description:
        'A heartwarming depiction of mans best friend, showcasing the loyalty and affectionate nature of a dog through vibrant watercolor tones.',
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <img src={pro.img} alt={pro.title} />

            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
