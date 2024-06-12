import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>SAFIN TRAVEL</title>
      </Helmet>
      <span className="about-text">
        <span>🛩️ Турпакеты </span>
        <br></br>
        <span>🎫 Авиабилеты</span>
        <br></br>
        <span>🏖 Отдых в любую точку мира</span>
      </span>
      <div className="about-about">
        <div className="about-group">
          <div className="about-group2">
            <div className="about-navigation">
              <span className="about-text06">ИНСТАГРАМ</span>
              <img
                alt="SocialIcons1153"
                src="/external/socialicons1153-8i0s.svg"
                className="about-social-icons"
              />
              <div className="about-frame"></div>
            </div>
          </div>
          <img
            alt="IMG904411171"
            src="/external/img904411171-rcp-200w.png"
            className="about-img90441"
          />
          <a
            href="https://yandex.uz/maps/org/safin_travel/14324553909/?ll=66.957088%2C39.655182&z=17.11"
            target="_blank"
            rel="noreferrer noopener"
            className="about-frame00-button"
          >
            <span className="about-text07">НАШ АДРЕС</span>
          </a>
          <div className="about-frame1"></div>
          <span className="about-text08">ПУТЕШЕСТВУЙ ВМЕСТЕ С НАМИ!</span>
          <img
            alt="image11325"
            src="/external/image11325-46ye-700w.png"
            className="about-image1"
          />
        </div>
        <div className="about-headline">
          <span className="about-text09">🧳 SAFIN TRAVEL</span>
          <span className="about-text10">Сайт по туризму и путешествиям</span>
        </div>
      </div>
    </div>
  )
}

export default About
