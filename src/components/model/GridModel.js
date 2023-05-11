import { useEffect, useRef } from 'react'
import '../../css/model/gridModel.css'
import ReactPlayer from 'react-player'



export default function GridModel({imgFolder, imgURL={image1: null, image2: null, image3: null}, videoURL, content, id}) {

    // Load images
    const firstImage = require(`../../css/model/images/${imgFolder}/${imgURL.image1}.jpeg`)
    const secondImage = require(`../../css/model/images/${imgFolder}/${imgURL.image2}.jpeg`)
    let thirdImage;
    if(imgURL.image3){
        thirdImage = require(`../../css/model/images/${imgFolder}/${imgURL.image3}.jpeg`)

    }
    let video;
    if(videoURL){
        video = require(`../../css/model/video/${videoURL}`)
    }
    // Animation with delays for each gridChild to appear one after the other
    // Using IntersectionObserver API on each Child
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            const gridImage = entry.target.children[0]
            const gridContent = entry.target.children[1]
            if(entry.isIntersecting){
                entry.target.classList.add('animate')
                gridContent.classList.add('animate')
                gridImage.classList.add('animate')
                //entry.target.style.animationDelay = `${(index+1) * 0.2}s`

            } else {
                entry.target.classList.remove('animate')
                gridContent.classList.remove('animate')
                gridImage.classList.remove('animate')

            }
        })
    }, {threshold: .1,
        rootMargin: '200px',
        triggerOnce: false,
        
        })

    // Observe children once mounted
    useEffect(() => {
        const children = document.querySelectorAll('#gridChild')
        children.forEach((child) => {
            observer.observe(child)
        })
        return () => {
            children.forEach((child) => {
                observer.unobserve(child)
            })
        }
    },[])

    // Reusable Return using flex-reverse on second gridChild
    return <>
        <div id="gridModel" className={`gridModel--${imgFolder}-${id}`}>
            <div id="gridChild">
                <div id="gridImage">
                    <img src={firstImage}/>
                </div>
                <div id="gridContent">
                    <h4>{content.gridOne.title}</h4>
                    <p>{content.gridOne.para}</p>
                </div>
            </div>
            <div id="gridChild">
                <div id="gridImage">
                    {videoURL?
                        <ReactPlayer
                        url={video}
                        playing={true}
                        loop={true}
                        muted={true}
                        id="gridTwoVideo"
                        style={{}}
                        />
                    :
                    <img src={thirdImage} />
                    }
                </div>
                <div id="gridContent">
                    <h4>{content.gridTwo.title}</h4>
                    <p>{content.gridTwo.para}</p>
                </div>
            </div>
            <div id="gridChild">
                <div id="gridImage">
                    <img src={secondImage}/>
                </div>
                <div id="gridContent">
                    <h4>{content.gridThree.title}</h4>
                    <p>{content.gridThree.para}</p>
                </div>
            </div>
        </div>
    </>
}