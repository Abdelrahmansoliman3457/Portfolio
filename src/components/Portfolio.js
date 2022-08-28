import React from 'react';
import Img1 from '../assets/club.jpeg';
import Img2 from '../assets/couaching.jpeg';
import Img3 from '../assets/dashboard1.png';
import Img4 from '../assets/loooooo.jpeg';
import Img5 from '../assets/rest1.png';
import Img6 from '../assets/port1.png';
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Img1} />
          </div>
          <h3>Amazing Club</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abdelrahmansoliman3457' className='btn' target='_blank'>GitHub</a>
            <a href='https://delicate-baklava-207c55.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Img2} />
          </div>
          <h3>Coaching Experts</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abdelrahmansoliman3457' className='btn' target='_blank'>GitHub</a>
            <a href='https://shimmering-capybara-924dda.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Img4} />
          </div>
          <h3>Taskon Website</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abdelrahmansoliman3457' className='btn' target='_blank'>GitHub</a>
            <a href='https://hilarious-semolina-fd80cb.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Img3} />
          </div>
          <h3>Admin dashboard</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abdelrahmansoliman3457' className='btn' target='_blank'>GitHub</a>
            <a href='https://quizzical-meninsky-886f1a.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Img5} />
          </div>
          <h3>Resturent</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abdelrahmansoliman3457' className='btn' target='_blank'>GitHub</a>
            <a href='https://newlastrestsolia.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Img6} />
          </div>
          <h3>personal website</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abdelrahmansoliman3457' className='btn' target='_blank'>GitHub</a>
            <a href='https://lastsoliaweb.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
