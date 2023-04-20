import '../css/model/modelSpecs.css'
import HeroCta from '../components/model/HeroCta';
import { useEffect, useRef, useState } from "react";

export default function ModelSpecs({ ID, modelName, bgColor, fontColor,imgFolder, img, specsCta, ctaBtn }) {

    const importedImage = require(`../../src/css/model/images/${imgFolder}/${img}`);
    const main = useRef()
    const modelNameForClasses = modelName.replace(' ', '-')
    const handleButtonClick = (e, index) => {

        const clickedElem = document.querySelector(`#SpecsTable${index}`);
        const activeBtn = document.querySelector(`.SpecsBtn.active`)
        const clickedBtn = document.querySelector(`.SpecsBtn-${index}`)
        if (!clickedElem.classList.contains('active') || !clickedBtn.classList.contains('active')) {
            clickedElem.classList.add('active')
            activeBtn.classList.remove('active')
            clickedBtn.classList.add('active')
            let otherElemOne;
            let otherElemTwo;
            if(document.querySelector('#SpecsTable2')){

                if (index === 0) {
                    otherElemOne = document.querySelector('#SpecsTable1')
                    otherElemTwo = document.querySelector('#SpecsTable2')
    
                } else if (index === 1) {
                    otherElemOne= document.querySelector('#SpecsTable0')
                    otherElemTwo = document.querySelector('#SpecsTable2')

                } else
                {
                    otherElemOne = document.querySelector('#SpecsTable0')
                    otherElemTwo = document.querySelector('#SpecsTable1')

                }
                otherElemOne.classList.remove('active')
                otherElemTwo.classList.remove('active')
            }else{
                if(index === 0){
                    otherElemOne = document.querySelector('#SpecsTable1')
                }else {
                    otherElemOne= document.querySelector('#SpecsTable0')
                }
                otherElemOne.classList.remove('active')
            }


        }
    };

    const renderTables = () => {
        return Object.values(specsCta).map((value, index) => (
            <div
                key={`SpecsTable${index}`}
                id={`SpecsTable${index}`}
                className={`SpecsTable ${index === 0 ? "active" : ""}`}
            >
                <div id={`SpecsTablePerk${index}`}>
                    {Object.values(value.perks).map((perk, idx) => (
                        <div key={`perk${index}${idx}`} id={`Perky${index}${idx}`} className={`perky${index}`}>
                            <div id="perkyTitle" >{perk.title}</div>
                            <div id="perkyDetails">{perk.details}</div>
                            {perk.asterix ? (
                                <div id="perkyAsterix">{perk.asterix}</div>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    useEffect(() => {
        main.current.style.setProperty('--mainBgColor', bgColor)
        main.current.style.setProperty('--mainFontColor', fontColor)
    }, [])

    // Animate at apparition
    const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('aPPear')
                }else {
                    entry.target.classList.remove('aPPear')
                }
            }) 
        }
    , {
        threshold: .1,
        rootMargin: '0px'
    })
    useEffect(() => {
        const tables = document.querySelector('#SpecsTables');
        observer.observe(tables);
      
        return () => {
          observer.unobserve(tables);
        }
      }, []);


    return (
        <>
        <div id={`ModelSpecs--${ID}`} className={`modelSpecs--${modelNameForClasses}-${ID}`}>
            <main ref={main} id="ModelSpecsMain">
                <div id="SpecsImgDiv">
                    <img src={importedImage} id="ModelSpecsIMG" />
                </div>
                <div id="SpecsTables">
                    <div id="SpecsHeader">{modelName} <span id="SpecsSpanHeader"> Specs</span></div>
                    <div id="SpecsTablesCtas">
                        {Object.values(specsCta).map((value, index) =>
                            <div id="SpecsBtn" class={`SpecsBtn-${index} SpecsBtn ${index === 0 ? "active" : ""}`} onClick={(e) => handleButtonClick(e, index)}>{value.title}</div>
                        )}
                    </div>
                    <div id="TablesFromSpecs">
                        {renderTables()}
                    </div>
                </div>
                <div id="SpecsFooter">
                    {modelName !== 'Solar Roof' && 
                        <div id="HeroModelCTAs">
                            <HeroCta cta="Compare Models" type="secondary-Two black" heroID={ID}/>
                        </div>
                    }
                </div>
            </main>

        </div>

        </>
    )
}