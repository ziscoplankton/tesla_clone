import { useEffect, useRef } from 'react'
import '../../css/model/modelSection.css'
import '../../css/model/animations.css'
import ModelCta from './ModelCta.js';

export default function SectionModel({model,model_name, folderIMG, para, rangeTitle, rangeDetails, speedTitle, speedDetails, topPerfTitle, topPerfDetails, peakPowerTitle, peakPowerDetails, navBarColor}) {

    const modelName = model.replace(/\s+/g, '')
    const imageUrl = require(`../../css/model/images/${folderIMG}/${modelName}.jpeg`);
    const headerH1 = useRef()

    // Display settings
    useEffect(() => {
        const sectionM = document.querySelector(`.${modelName}`)
        sectionM.style.setProperty('--bg-image', `url(${imageUrl})`);
        headerH1.current.style.color = navBarColor
        
    },[])

    // Animation on perks and ctas

    useEffect(() => {
        const modelFooter = document.querySelector('#ModelFooter')
        const perks = document.querySelectorAll('.perk')
        perks.forEach((perk) => {
            perk.classList.add('animate')
        })
        modelFooter.classList.add('animate')
    }, [])        
    
    return <div id="sectionModel" className={modelName}>
        <div ref={headerH1} id="ModelHeader">
            <h1 >{model}</h1>
            <p>{para}</p>
        </div>
        <div id="ModelBody">
            <div id="ModelPerfs">
                <div id="PerkOne" className='perk'>
                    <div>
                        <div className="title">
                            <div>{rangeTitle}</div>
                        </div>
                        <div className="details">
                            <p>{rangeDetails}</p>
                        </div>
                    </div>
                </div>
                <div id="PerkTwo" className='perk'>
                    <div>
                        <div className="title">
                            <div>{speedTitle}</div>
                        </div>
                        <div className="details">
                            <p>{speedDetails}</p>
                        </div>
                    </div>
                </div>
                <div id="PerkThree" className='perk'>
                    <div>
                        <div className="title">
                            <div>{topPerfTitle}</div>
                        </div>
                        <div className="details">
                            <p>{topPerfDetails}</p>
                        </div>
                    </div>
                </div>
                <div id="PerkFour" className='perk'>
                    <div>
                        <div className="title">
                            <div>{peakPowerTitle}</div>
                        </div>
                        <div className="details">
                            <p>{peakPowerDetails}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ModelFooter">

                {model_name !== 'Solar Roof' && 
                    <>
                    <ModelCta cta="View Inventory" type="primary" />
                    <ModelCta cta="Order Now" type="secondary" />
                    </>
                }
                {model_name === 'Solar Roof' && 
                    <>
                        <ModelCta cta="Order now" type="primary" />
                    </>
                
                }
            </div>
        </div>

    </div>

}