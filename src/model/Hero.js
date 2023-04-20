import React from 'react'
import { useEffect, useRef, useState } from 'react'
import '../css/model/hero.css'
import '../css/model/heroType2.css'
import '../css/model/animations.css'
import HeroCta from '../components/model/HeroCta'
import ReactPlayer from 'react-player'

export default function Hero({ heroID, heroType, pointsforHeroNaked = null, heroName, heroBgColor,heroContentColor, contentColor, model, heroImageName = undefined, heroVideoURL = undefined, heroSizes, heroContent = null, content = { header: { title: '', para: '' }, description: null, descriptionStart: null, descriptionEnd: null, descriptionBetween: null, calltoAction: { ctaOne: '', ctaTwo: '' } }, cta, extraContent = null }) {

    const heroPerkTitleRef = useRef()
    const heroPerkDetailsRef = useRef()
    const heroModelContent = useRef()
    const heroModelCTAs = useRef()

    const [stateHeroContent, setStateHeroContent] = useState(heroContent)
    // Window sizes
    const [screenSizes, setScreenSizes] = useState({ x: window.innerWidth, y: window.innerHeight })
    // Load assets
    //const heroImage = require(`../src/css/model/images/${heroImageName}.jpeg`)

    // Execute background asset & css variables
    useEffect(() => {
        // Main DIV changes
        const heroImgDiv = document.querySelector(`.heroIMG--${heroType}-${heroID}`)
        
        // If Hero is an image
        if (heroImageName) {
            heroImgDiv.style.setProperty('--heroBg', `url(${heroImageName})`)
            heroImgDiv.style.setProperty('--heroWidth', heroSizes.width)
            heroImgDiv.style.setProperty('--heroHeight', heroSizes.height)
        }
        const heroDIV = document.querySelector(`#HeroModel--${heroType}-${heroID}`)
        const heroModelDiv = document.querySelector(`#HeroModel--${heroType}-${heroID}`)

        // set bg colors and heights css variables
        heroDIV.style.setProperty(`---heroBg--${heroType}-${heroID}`, heroBgColor)


        // set colors for heroIMGcontent
        const heroImgContentDiv = document.querySelector(`.heroImgContent--${heroType}-${heroID}`)
        heroImgContentDiv.style.setProperty('--contentColor', heroContentColor)

        // set colors for body
        const heroBodyDiv = document.querySelector(`.heroModelContent--${heroType}-${heroID}`)
        heroBodyDiv.style.setProperty('--fontColor', contentColor)
        heroBodyDiv.style.setProperty(`--heroModelContentHeight-${heroID}`, `calc(100vh - ${heroSizes.height})`)


        // Add button changes
        const heroCtaPrimary = document.querySelector(`.heroBtnCta---primary--${heroType}-${heroID}`)
        const heroCtaSecondary = document.querySelector(`.heroBtnCta---secondary--${heroType}-${heroID}`)
        heroCtaPrimary.classList.add(heroBgColor)
        heroCtaSecondary.classList.add(heroBgColor)


    }, [])

    // Update Window sizes
    window.addEventListener('resize', () => {
        setScreenSizes({ x: window.innerWidth, y: window.innerHeight })
    })


    //Animation with Observer for HeroContent apparition on big screen
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('animatedPerkY')
    //             entry.target.classList.remove('removedPerkY')
    //         } else {
    //             entry.target.classList.remove('animatedPerkY')
    //             entry.target.classList.add('removedPerkY')
    //         }
    //     })
    // }, {
    //     threshold: .6,
    //     rootMargin: '200px'
    // })
    // useEffect(() => {
    //     const heroPerks = document.querySelectorAll('.HeroPerk')
    //     heroPerks.forEach((heroPerk) => {
    //         observer.observe(heroPerk)
    //     })

    //     return () => {
    //         heroPerks.forEach((heroPerk) => {
    //             observer.unobserve(heroPerk)
    //         })
    //     }
    // }, [])


    // Animate HeroModelContent
    // const heroModelContent = useRef()
    // const heroModelCTAs = useRef()
    // const observer2 = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.remove('heroModelContentDisappear')
    //             entry.target.classList.add('heroModelContentAppear')

    //         } else {
    //             entry.target.classList.remove('heroModelContentAppear')
    //             entry.target.classList.add('heroModelContentDisappear')
    //         }
    //     })
    // }, {
    //     threshold: .1,
    //     rootMargin: '0px',
    // })
    // useEffect(() => {
    //     observer2.observe(heroModelCTAs.current)
    //     observer2.observe(heroModelContent.current)
    // }, [])



    //Animate Bars and text car side details for Hero--Four: ModelS
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate')
            } else {
                entry.target.classList.remove('animate')
            }
        })
    }, {
        threshold: .1,
        rootMargin: '50px'
    })
    useEffect(() => {
        const pointOne = document.querySelector('#pointOne')
        const pointTwo = document.querySelector('#pointTwo')
        if(pointOne && pointTwo){
            observer3.observe(pointOne)
            observer3.observe(pointTwo)
        }


        return () => {
            const pointOne = document.querySelector('#pointOne')
            const pointTwo = document.querySelector('#pointTwo')
            if(pointOne && pointTwo){
                observer3.unobserve(pointOne)
                observer3.unobserve(pointTwo)
            }
        }
    }, [])


    // Change txt for HeroPerk on big screen
    // useEffect(() => {
    //     if (screenSizes.x >= 701) {
    //         if (heroName == 'Vision') {
    //             const heroPerkOne = document.querySelector('#Vision--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#Vision--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#Vision--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = 'Rear, side and forward facing cameras provide maximum visibility'
    //             heroPerkTwo.innerHTML = 'Powerful visual processing at up to 250 meters of range'
    //             heroPerkThree.innerHTML = 'Tesla Vision detects nearby cars, helps prevent potential collisions and asssists with parking'
    //         }
    //         if(heroName == 'Model3'){
    //             const heroPerkOne = document.querySelector('#Model3--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#Model3--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#Model3--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = 'Quickest acceleration-from zero to 60 mph* in as little as 3.1 seconds'
    //             heroPerkTwo.innerHTML = 'Improved handling and aerodynamics allow for a top speed of 162 mph'
    //             heroPerkThree.innerHTML = 'Dual Motor all-Wheel Drive Instantly controls traction and torque, il all weather conditions'
    //         }
    //         if(heroID == "Two" && heroBgColor=="white" && model=="ModelS"){
    //             const heroPerkOne = document.querySelector('#ModelS--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#ModelS--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#ModelS--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = "Independent motors digitally control torque to the front and rear wheels"
    //             heroPerkTwo.innerHTML = "Dual motors respond to changing conditons as little as 10 milliseconds"
    //             heroPerkThree.innerHTML = "Unparalleled traction and control, in all weather conditions"
    //         }if(heroID == "Three" && model=="Model3"){
    //             const heroPerkOne = document.querySelector('#Model3--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#Model3--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#Model3--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = "Independent motors digitally control torque to the front and rear wheels"
    //             heroPerkTwo.innerHTML = "Dual motors respond to changing conditons as little as 10 milliseconds"
    //             heroPerkThree.innerHTML = "Unparalleled traction and control, in all weather conditions"
    //         }if(heroID=="Three" && heroName=="Range" && model=="Model3"){
    //             const heroPerkOne = document.querySelector('#Range--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#Range--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#Range--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = "Go anywhere with up to 358 mi of estimated range on a single charge"
    //             heroPerkTwo.innerHTML = "Recharge up to 175 mi in 15 minutes at Supercharger locations"
    //             heroPerkThree.innerHTML = "Superchargers placed along well-traveled routes around the world"

    //         }
    //     } else {
    //         if (heroName == 'Vision') {
    //             const heroPerkOne = document.querySelector('#Vision--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#Vision--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#Vision--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = 'Degrees of Visibility'
    //             heroPerkTwo.innerHTML = 'of Powerful Visual Processing'
    //             heroPerkThree.innerHTML = 'Tesla Vision'
    //         }
    //         if(heroName == 'Model3'){
    //             const heroPerkOne = document.querySelector('#Model3--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#Model3--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#Model3--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = heroContent? heroContent.perkOne.details: ""
    //             heroPerkTwo.innerHTML = heroContent? heroContent.perkTwo.details: ""
    //             heroPerkThree.innerHTML = heroContent? heroContent.perkThree.details: ""

    //         }if(heroID == "Two" && heroBgColor=="white" && model=="ModelS"){
    //             const heroPerkOne = document.querySelector('#ModelS--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#ModelS--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#ModelS--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = heroContent? heroContent.perkOne.details: ""
    //             heroPerkTwo.innerHTML = heroContent? heroContent.perkTwo.details: ""
    //             heroPerkThree.innerHTML = heroContent? heroContent.perkThree.details: ""


    //         }if(heroID=="Three" && heroName=="Range" && model=="Model3"){
    //             const heroPerkOne = document.querySelector('#Range--HeroPerkDetails-perkOne')
    //             const heroPerkTwo = document.querySelector('#Range--HeroPerkDetails-perkTwo')
    //             const heroPerkThree = document.querySelector('#Range--HeroPerkDetails-perkThree')
    //             heroPerkOne.innerHTML = "Range(EPA est.)"
    //             heroPerkTwo.innerHTML = "Recharge up to 175 mi"
    //             heroPerkThree.innerHTML = "Global Superchargers"

    //         }
    //     }
    // }, [screenSizes])


    // Animate All Hero Perks & content Hero Type "One" when visible 
    const perkObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('animate')
            }else {
                entry.target.classList.remove('animate')
            }
        })
    },{
        threshold: .1,
        rootMargin: '100px'
    })
    const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('animate')
            }else {
                entry.target.classList.remove('animate')
            }
        })
    },{
        threshold: .1,
        rootMargin: '100px'
    })

    useEffect(() => {
        const perks = document.querySelectorAll('.HeroPerk')
        perks.forEach((perk) => {
            perkObserver.observe(perk)
            return () => {
                perkObserver.unobserve(perk)
            }
        })

        const heroModelContents = document.querySelectorAll(`#HeroModelContent`)
        heroModelContents.forEach((modelContent) => {
            contentObserver.observe(modelContent)
        })

    }, [])

    // Animate points for Hero Type "Safety" 
    // const pointsObserver = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if(entry.isIntersecting){

    //         }else {

    //         }
    //     })
    // }, {
    //     threshold: .1,
    //     rootMargin: '100px'
    // })

    // useEffect(() => {
    //     const pointOne = document.querySelector('#pointOne')

    //     const beforePointOne = window.getComputedStyle(pointOne, '::before')
    // }, [])

    let video;
    if(heroVideoURL){
        video = require(`../css/model/video/${heroVideoURL}`)
    }
    return <div id={`HeroModel--${heroType}-${heroID}`} className={`HeroModel--${heroName} HeroModel${heroType}--${heroID} heroModel--${heroType} heroModel--${model}`}>
        <div id={`Hero--${heroType}`} className={`heroIMG--${heroType}-${heroID} heroIMG--${heroName}-${model}`}>
            {heroVideoURL &&
                <div id="HeroVIDEO">
                    <ReactPlayer
                        url={video}
                        playing={false}
                        muted={true}

                        // Hide the video element
                        id="myVideos"
                    />
                </div>
            }
            {heroName == 'Safety' &&
                <div id="pointTwo">{pointsforHeroNaked ? pointsforHeroNaked.two : ""}</div>
            }
            {heroName == 'Safety' &&
                <div id="pointOne">{pointsforHeroNaked ? pointsforHeroNaked.one : ""}</div>
            }

            {heroName == 'Safety' &&
                <div id='pointOneBall'></div>
            }
            {heroName == 'Safety' &&
                <div id='pointTwoBall'></div>
            }
        <div className={`heroImgContent--${heroType}-${heroID} heroImgContent--${heroType}`} id="HeroContent">
                {heroContent && Object.entries(stateHeroContent).map(([key, value]) =>
                    <div id={`${heroName}--HeroPerk-${key}`} className="HeroPerk" key={key}>
                        <div id={`${heroName}--HeroPerkTitle-${key}`} className="heroPerkTitle">{value.title}</div>
                        <div id={`${heroName}--HeroPerkDetails-${key}`} className="heroPerkDetails">{value.details}</div>
                    </div>
                )}
            </div>
        </div>
        <div ref={heroModelContent} id="HeroModelContent" className={`heroModelContent--${heroType} heroModelContent--${heroType}-${heroID}`}>
            <div id="HeroModelHeader" className={`heroModelHeader--${heroType}`}>
                    <h5>{content.header.title}</h5>
                    <h3>{content.header.para}</h3>
            </div>
            <div id="HeroModelDescription" className={`heroModelDescription--${heroType}`}>
                <p>
                    {content.descriptionBetween !== "" &&
                        content.descriptionStart
                    }
                    {content.calltoAction &&
                        <span className='HeroDescriptionCTA'>{content.calltoAction.ctaOne}</span>
                    }
                    {content.calltoAction &&
                        content.descriptionBetween
                    }
                    {content.calltoAction &&
                        <span className='HeroDescriptionCTA'>{content.calltoAction.ctaTwo}</span>
                    }
                    {content.descriptionEnd &&
                        content.descriptionEnd
                    }
                    {content.description &&
                        content.description
                    }
                    {extraContent??
                        extraContent
                    }
                </p>
            </div>
                <div ref={heroModelCTAs} id="HeroModelCTAs" className={`heroModelCTAs--${heroType}`}>
                    <HeroCta cta={cta.primary} type="primary" heroType={heroType} heroID={heroID} />
                    <HeroCta cta={cta.secondary} type="secondary" heroType={heroType} heroID={heroID} />
                </div>                

        </div>

    </div>
}







