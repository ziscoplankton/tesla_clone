import { useEffect } from 'react'
import '../../css/model/heroCta.css'

export default function HeroCta({cta, type, heroType, heroID, color, borderColor}) {

    return <div id="HeroCtaBUTTON">
        <button className={`heroBtnCta heroBtnCta--${type} heroBtnCta--${type}-${heroType} heroBtnCta---${type}--${heroType}-${heroID}`}>{cta}</button>
    </div>
}