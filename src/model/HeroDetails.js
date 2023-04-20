import { useEffect, useRef, useState } from 'react'
import '../css/model/heroDetails.css'


export default function HeroDetails({id, heroDName, bgColor, header, imgURL, tables }) {


    // Allocate background clr
    useEffect(() => {
        const heroDetailsDiv = document.querySelector(`#HeroDetails--${id}`)
        heroDetailsDiv.style.backgroundColor = bgColor;
    }, [])

     //Load assets
     const imgRefs = [];
     const importedImages = Object.keys(imgURL).map((key, index) => {
        const imgObj = imgURL[key];
        const importedImage = require(`../../src/css/model/images/modelS/${imgObj}`);
        imgRefs[index] = useRef(null);
        return importedImage;
      });
    // Create state to animate and change display settings
    // For the HeroTables
    const [screenSizes, setScreenSizes] = useState({ x: window.innerWidth, y: window.innerHeight })
    const [isAnimated, setisAnimated] = useState(true)

    const heroTablesRef = useRef()
    const tableRef = useRef()
    const handleClick = (e) => {

        // // Reset all animations made
        setisAnimated(false)


        const table = e.target.parentElement.parentElement
        const tables = e.target.parentElement.parentElement.parentElement
        // Clear tables
        heroTablesRef.current.classList.remove('moveRight')
        heroTablesRef.current.classList.remove('moveLeft')
        heroTablesRef.current.classList.remove('moveBack')
        imgRefs[0].current.classList.remove('display')
        imgRefs[0].current.classList.remove('removal')
        imgRefs[1].current.classList.remove('display')
        imgRefs[1].current.classList.remove('removal')

        // // Check if table is already displayed
        if (!table.classList.contains('display')) {
            table.classList.add('display')
            // Check which table
            if (table.classList.contains('table0')) {
                imgRefs[0].current.classList.add('display')
                heroTablesRef.current.classList.add('moveRight')
            } else {
                imgRefs[1].current.classList.add('display')
                heroTablesRef.current.classList.add('moveLeft')
            }
        } else {
            table.classList.remove('display')
            if (table.classList.contains('table0')) {
                imgRefs[0].current.classList.add('removal')
                imgRefs[1].current.classList.add('display')
                heroTablesRef.current.classList.add('moveLeft')
            } else {
                heroTablesRef.current.classList.add('moveRight')
                imgRefs[1].current.classList.add('removal')
                imgRefs[0].current.classList.add('display')
            }
        }

        // After click, reanimate automatically, user might have moved on
        setInterval(() => {
            setisAnimated(true)
        }, 5000)


    }


    //Automated animation
    useEffect(() => {
        const tableOne = document.querySelector('.table0')
        const tableTwo = document.querySelector('.table1')
        if (isAnimated) {
            const animationOne = setInterval(() => {
                heroTablesRef.current.classList.add('moveRight')
                tableOne.classList.add('display')
                tableTwo.classList.remove('display')
                imgRefs[0].current.classList.add('display')
                imgRefs[0].current.classList.remove('removal')
                imgRefs[1].current.classList.remove('display')
                imgRefs[1].current.classList.add('removal')
            }, 4000)

            const animationTwo = setInterval(() => {
                heroTablesRef.current.classList.remove('moveRight')
                heroTablesRef.current.classList.add('moveLeft')
                tableOne.classList.remove('display')
                tableTwo.classList.add('display')
                imgRefs[0].current.classList.remove('display')
                imgRefs[0].current.classList.add('removal')
                imgRefs[1].current.classList.add('display')
                imgRefs[1].current.classList.remove('removal')

            }, 8000)

            return () => {
                window.clearInterval(animationOne)
                window.clearInterval(animationTwo)
            }

        } else {
            tableOne.classList.remove('display')
            tableTwo.classList.remove('display')
            heroTablesRef.current.classList.remove('moveRight')
            heroTablesRef.current.classList.remove('moveLeft')
            imgOneRef.current.classList.remove('display')
            imgOneRef.current.classList.remove('removal')

            imgTwoRef.current.classList.remove('display')
            imgTwoRef.current.classList.remove('removal')


        }



    }, [isAnimated])

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
    return <div id={`HeroDetails--${id}`}>
        <div id={`HeroD__container`}>
            <div id="HeroDetailsContent">
                <div id="HeroDetailsTitle">{header.title}</div>
                <div id="HeroDetailsPara">{header.para}</div>
            </div>
            <div id="HeroDetailsCarousel">
                {heroDName == 'Model S' &&
                <img ref={imgRefs[0]} src={importedImages[0]} className='HeroDetailsImage' alt="" />
                }
                {heroDName == 'Model S' &&
                <img ref={imgRefs[1]} src={importedImages[1]} className='HeroDetailsImage' alt="" />
                }
            </div>
            <div ref={heroTablesRef} onClick={(e) => handleClick(e)} id="HeroTables" className=''>
                {Object.values(tables).map((table, index) => (
                    <div ref={tableRef} key={index} id="HeroTableDetails" className={`table${index}`}>
                        <div id="HeroTableHead">
                            <h5>{table.head.title}</h5>
                            <p>{table.head.para}</p>
                        </div>
                        <div id="HeroTableBody">
                            <div className="HeroTablePerks">
                                {Object.values(table.characs).map((charac, characIndex) => (
                                    <div key={characIndex} className="HeroPerkDiv">
                                        <h3>{charac.time || charac.top || charac.hp}</h3>
                                        <h6>{charac.details || charac.range || charac.title}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id="HeroDetailsFooter">
                * With rollout subtracted
            </div>
        </div>
    </div>
}