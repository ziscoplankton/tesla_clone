
import { useEffect, useRef } from 'react'
import '../css/model/modelFooter.css'

import HeroCta from '../components/model/HeroCta';

export default function ModelTips({id, name, title, imgFolder, imageName, bgColor, cta, tips = null, learn}) {

    // BgColor + Asset


    useEffect(() => {
        const MainDiv = document.querySelector('#ModelTips')
        MainDiv.style.backgroundColor = bgColor
        if(imgFolder && imageName){
            const image = require(`../../src/css/model/images/${imgFolder}/${imageName}`);
            const imgDiv = document.querySelector('#ModelTipsImg')
            imgDiv.style.setProperty('--ModelTipsImg', `url(${image})`)
    
        }
    }, [])




    return <div id="ModelTips" className={`modelTips--${id}-${name.replace(' ', '-')}`}>
        <div id="ModelTipsImg"></div>
        <div id="ModelTipsTitle">
            <div>{title}</div>
        </div>
        <div id="ModelTipsCTAs">
            <div id="HeroModelCTAs">
                        <HeroCta cta={cta.primary} type="primary" heroType="One" heroID={id}/>
                        <HeroCta cta={cta.secondary} type="secondary" heroType="One" heroID={id}/>
            </div>
        </div>
        <div id="ModelTipsContent">
            <div id="TipsContent">{tips} <span id="ModelTipsLearnCTA">{learn}.</span></div>
        </div>
        <div id="ModelTipsFooter">
            <ul>
                <li>Tesla © 2023</li>
                <li>Privacy & Legal</li>
                <li>Vehicle Recalls</li>
                <li>Careers</li>
                <li>News</li>
                <li>Engage</li>
                <li>Location</li>
            </ul>
        </div>
    </div>
}