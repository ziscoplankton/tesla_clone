import { useEffect, useState, useRef } from "react";

import HeroImageCta from "../components/model/HeroImageCta.js";
import '../css/model/heroImage.css'
export default function HeroImg({heroID, content, cta, images }) {

  const [currentImage, setCurrentImage] = useState(0)
  

  // Animation
  const imagesRef = useRef([])
  const intervalIdRef = useRef(null)
  const [isAnimated, setisAnimated] = useState(true)
  useEffect(() => {
    const images = imagesRef.current
    const numImages = images.length

    if(isAnimated){
      intervalIdRef.current = setInterval(() => {
        images.forEach((image, index) => {
          if (index === currentImage) {
            image.classList.add('active')
            image.classList.remove('notActive')
          } else {
            image.classList.remove('active')
            image.classList.add('notActive')
          }
        });
  
        setCurrentImage((currentImage + 1) % numImages)
      }, 4000)
  
      return () => clearInterval(intervalIdRef.current)
    } else {
      window.setTimeout(() => {
        setisAnimated(true)
      }, 5000)
    }
  }, [currentImage, isAnimated])

  // Handle Animation on click
  const handleClick = (e) => {
    setisAnimated(false);
    const clickedIndex = parseInt(e.target.id)
    setCurrentImage(clickedIndex)
    const titles = document.querySelectorAll(`[id^="HeroImageContentTitle--"]`)
    titles.forEach((title, index) => {
      if (index === clickedIndex) {
        title.classList.add("active")
      } else {
        title.classList.remove("active")
      }
    })
  }

  // Animate HeroCTAs
  const heroModelContentRef = useRef()
  const heroImageModelCTAsRef = useRef()
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        const heroImageCTAs = document.querySelector('#HeroImageModelCTAs')
        heroImageCTAs.classList.add('active')

      }else {
        const heroImageCTAs = document.querySelector('#HeroImageModelCTAs')
        if(heroImageCTAs.classList.contains('active'))
          heroImageCTAs.classList.remove('active')

      }
    })
  }, {
    threshold: .8,
    rootMargin: '100px'
  })

  useEffect(() => {
    observer.observe(heroModelContentRef.current)
    return () => {
      observer.unobserve(heroModelContentRef.current)
    }
  }, [])
    return (
      <div id={`HeroImageModel--${heroID}`}>
          <div ref={heroModelContentRef} id="HeroImageModelContent">
              <div id="HeroImageModelHeader" >
                      <h5>{content.header.title}</h5>
                      <h3>{content.header.para}</h3>
              </div>
              <div id="HeroImageModelDescription">
                  <p>
                      {content.descriptionBetween !== "" &&
                          content.descriptionStart
                      }
                      {content.calltoAction &&
                          <span className='heroImageDescriptionCTA'>{content.calltoAction.ctaOne}</span>
                      }
                      {content.calltoAction &&
                          content.descriptionBetween
                      }
                      {content.calltoAction &&
                          <span className='heroImageDescriptionCTA'>{content.calltoAction.ctaTwo}</span>
                      }
                      {content.descriptionEnd &&
                          content.descriptionEnd
                      }
                      {content.description &&
                          content.description
                      }
                  </p>
              </div>
                  <div ref={heroImageModelCTAsRef} id="HeroImageModelCTAs" >
                      <HeroImageCta cta={cta.primary} type="primary" heroType={heroID} heroID={heroID} />
                      <HeroImageCta cta={cta.secondary} type="secondary" heroType={heroID} heroID={heroID} />
                  </div>                

          </div>
          <div id="HeroImages">
            {Object.values(images).map((image, index) => 
              <div ref={(el) => imagesRef.current[index] = el} key={index} id={`heroImageIMGDIV--${index}`} className={`heroImageIMGDIV heroImageIMGDIV--${index} ${index === currentImage ? ' active' : ''}`}>
                <img src={Object.values(images)[currentImage].url} id="HeroImageIMG" className={`heroImageIMG heroImageIMG--${index}${index === currentImage ? ' active' : ''}`} />
              </div>
            )}
          </div>
        <div id="HeroImageContent">
          <div id="pillsHeroImagesContent">
          {Object.values(images).map((image, index) => (
              <div onClick={(e) => handleClick(e)} key={index} style={{
                backgroundColor: index === currentImage? "black" : "#D0D1D2",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                margin: "0 10px 0 0",
                cursor: "pointer",
                }}
                className={`pill pill-${index}`}
                id={index}
              />
          ))}
          </div>
          <div id="TitlesHeroImagesContent">
          {Object.values(images).map((image, index) => (
              <>
              <p id={`HeroImageContentTitle`} className={index === currentImage? `HeroImageTitle--${index} active`: `HeroImageTitle--${index}`}>{image.title}</p>

            </>
          ))}
          </div>
        </div>
      </div>
    );
  }
  