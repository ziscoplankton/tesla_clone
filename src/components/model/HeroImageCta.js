import { useEffect } from 'react'


export default function HeroImageCta({cta, type, heroID, color, borderColor}) {

    return <div id="HeroImageBUTTON">
        <button className={`heroImageBtnCta heroImageBtnCta--${type} heroImageBtnCta--${heroID}`}>{cta}</button>
    </div>
}