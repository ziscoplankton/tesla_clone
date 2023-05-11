import ReactPlayer from 'react-player'
import '../css/model/heroCarousel.css'
import HeroCta from '../components/model/HeroCta'
import { useEffect, useRef, useState } from 'react'

export default function HeroCarousel({ keyCarousel, nameCarousel, pageCarousel, heroName, heroBgColor, heroDescription, heroImages = null, heroVideos = null, heroCTAs = null }) {

    const heroCarouselDiv = useRef()
    const imgsRefs = []
    const videosRefs = []

    const [screenSizes, setScreenSizes] = useState({ x: window.innerWidth, y: window.innerHeight })
    const [isAnimated, setisAnimated] = useState(true)
    const [videoIndex, setVideoIndex] = useState(0)
    const [duration, setDuration] = useState(0)
    const heroTablesRef = useRef()
    const tableRef = useRef()
    const videoPlayer = useRef([])

    const [imageIndex, setImageIndex] = useState(0)
    // Background of component
    useEffect(() => {
        heroCarouselDiv.current.style.background = heroBgColor
    }, [])

    
    const handleClickImgs = (e) => {

        // // Reset all animations made
        const table = e.target.parentElement
        const tableCheck = e.target.parentElement.parentElement
        if(table.classList.contains('table')){
            
        }
        //setisAnimated(false)
        //setImageIndex()

    }

    const handleClickVideos = (e) => {

        const number_video = e.target.classList[1] || e.target.parentElement.classList[1]
        setVideoIndex(parseInt(number_video))
        console.log(e.target)
    }


    const handleDuration = (duration) => {
        setDuration(duration)
    }

    const renderMedia = () => {
        const medias = Object.values(heroImages || heroVideos);
        return (
          <div id="HeroDetailsCarousel" className={`heroDetailsCarousel--${keyCarousel} heroCarousel--${nameCarousel}-${pageCarousel}`}>
            {medias.map((media, index) => {
              if (heroVideos && !media.url.includes('jpeg') && index === videoIndex) {
                return (
                  <div key={`video-${index}`}>
                    <div id={`heroVideo--${keyCarousel}-${pageCarousel}`} className={`heroVideo--${keyCarousel}-${pageCarousel}-${index} ${index} active`}>
                      <ReactPlayer
                        url={media.url}
                        playing={true}
                        style={{ width: '1000px', height: '500px' }}
                        config={{
                          file: {
                            attributes: {
                              id: `HeroCarouselVideo--${pageCarousel}-${index}`,
                              className: 'heroDetailsVideo',
                              'data-index': index,
                            },
                          },
                        }}
                        
                        onPlay={() => console.log('playing')}
                        onEnded={() => setVideoIndex(index+1 < medias.length? index+ 1 : 0)}
                        onDuration={handleDuration}
                      />
                    </div>
                  </div>
                );
              } else if (!media.url.includes('jpeg')) {
                return null;
              }
      
              const importedImage = require(`../../src/css/model/images/modelS/${media.url}`);
              imgsRefs[index] = useRef(null);
      
              return <img ref={imgsRefs[index]} key={`image-${index}`} id={`HeroCarouselImage--${index}`} className={`HeroDetailsImage heroDetailsImage heroDetailsImage--${keyCarousel}--${nameCarousel}`} src={importedImage} />;
            })}
          </div>
        );
      };
      


    const renderCharacteristics = () => {
        if (heroImages) {
            const medias = Object.values(heroImages)
            return (
                <div ref={heroTablesRef} onClick={(e) => handleClickImgs(e)} id="HeroTables" className={`heroTables-${keyCarousel} heroTables--${nameCarousel}-${pageCarousel}`}>
                    {medias.map((media, index) => (
                        <div ref={tableRef} id="HeroTableDetails" className={`table${index} table`}>
                            <div id="HeroTableHead">
                                <h5>{media.title}</h5>
                                <p>{media.details}</p>
                            </div>
                            <div id="HeroTableBody">
                                <div id="HeroTablePerks">
                                    {Object.values(media.characs).map((value, index) => (
                                        <div className='HeroPerkDiv'>
                                            <h3>{value.title}</h3>
                                            <h6> {value.details}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )

        } else {
            const medias = Object.values(heroVideos)
            return (
                <div ref={heroTablesRef} onClick={(e) => handleClickVideos(e)} id="HeroTablesVideo" className={`heroTables--${nameCarousel}-${pageCarousel}`}>
                    {medias.map((media, index) => (
                        <div ref={tableRef} id="HeroTableDetailsVideo" className={index === videoIndex? `tableVideo${index} tableVideo--${nameCarousel}-${pageCarousel} active`: `tableVideo${index} tableVideo--${nameCarousel}-${pageCarousel}`}>
                            
                            <div id="HeroTableHead" className={`heroTableHead--${index} ${index}`}>
                                <h5>{media.title}</h5>
                                <p>{media.details}</p>
                            </div>
                            <div id="HeroTableBody">
                                <div id="HeroTablePerks">
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }



    //Automated animation on images
    useEffect(() => {
        const tableOne = document.querySelector('.table0')
        const tableTwo = document.querySelector('.table1')
        if (isAnimated) {
            const animationOne = setInterval(() => {
                if (imgsRefs[0] && imgsRefs[1]) {
                    heroTablesRef.current.classList.add('moveRight')
                    tableOne.classList.add('display')
                    tableTwo.classList.remove('display')
                    imgsRefs[0].current.classList.add('display')
                    imgsRefs[0].current.classList.remove('removal')
                    imgsRefs[1].current.classList.remove('display')
                    imgsRefs[1].current.classList.add('removal')
                } else if (heroVideos) {
                }


            }, 4000)


            const animationTwo = setInterval(() => {
                if (imgsRefs[0] && imgsRefs[1]) {
                    heroTablesRef.current.classList.remove('moveRight')
                    heroTablesRef.current.classList.add('moveLeft')
                    tableOne.classList.remove('display')
                    tableTwo.classList.add('display')
                    imgsRefs[0].current.classList.remove('display')
                    imgsRefs[0].current.classList.add('removal')
                    imgsRefs[1].current.classList.add('display')
                    imgsRefs[1].current.classList.remove('removal')
                }

            }, 8000)

            return () => {
                window.clearInterval(animationOne)
                window.clearInterval(animationTwo)

            }

        } else {
            const tableThree = document.querySelector('.table3')
            tableOne.classList.remove('display')
            tableTwo.classList.remove('display')
            heroTablesRef.current.classList.remove('moveRight')
            heroTablesRef.current.classList.remove('moveLeft')
            imgsRefs[0].current.classList.remove('display')
            imgsRefs[0].current.classList.remove('removal')
            imgsRefs[1].current.classList.remove('display')
            imgsRefs[1].current.classList.remove('removal')
        }



    }, [isAnimated, videoIndex])


    // Automate video animations
    // useEffect(() => {
    //     window.setInterval(() => {
    //         setVideoIndex(videoIndex + 1 < Object.values(heroVideos).length? videoIndex+ 1 : 0)
    //     }, 5000)
    // }, [videoIndex])
    // Kepp track of window sz
    window.addEventListener('resize', () => {
        setScreenSizes({ x: window.innerWidth, y: window.innerHeight })
    })

    // Animate footer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('apparition')
            } else {
                entry.target.classList.remove('apparition')
            }
        })
    }, {
        threshold: .5,
        rootMargin: '100px'
    })
    useEffect(() => {
        const footer = document.querySelector('#HeroDetailsFooter')
        observer.observe(footer)

        return () => observer.unobserve(footer)
    }, [])

    return <div ref={heroCarouselDiv} id={`HeroDetails`} className={`heroDetails---${keyCarousel}--${nameCarousel}-${pageCarousel}`}>
        <div id={`HeroD__container`} className={`HeroD__container---${keyCarousel}--${nameCarousel}-${pageCarousel}`}>
            <div id="HeroDetailsContent" className={`heroDetailsContent---${keyCarousel}--${nameCarousel}-${pageCarousel}`}>
                <div id="HeroDetailsTitle">{heroName}</div>
                <div id="HeroDetailsPara">{heroDescription}</div>
                {heroCTAs && 
                    <div id="HeroModelCTAs" className={`heroModelCTAs--${keyCarousel}-${pageCarousel}`}>
                        <HeroCta cta={heroCTAs.primary} type="primary" heroType={'primary'} heroID={keyCarousel} />
                    </div> 
                }
            </div>
            {renderMedia()}
            {renderCharacteristics()}
            <div id="HeroDetailsFooter" className={`heroDetailsFooter---${keyCarousel}--${nameCarousel}-${pageCarousel}`}>
                * With rollout subtracted
            </div>
        </div>
    </div>
}
