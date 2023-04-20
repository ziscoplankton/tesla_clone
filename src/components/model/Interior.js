import { useEffect, useRef } from 'react'
import '../../css/model/interior.css'
import '../../css/model/animations.css'

export default function Interior({id, title, imgURL }) {

    const imageUrl = require(`../../css/model/images/modelS/${imgURL}.jpeg`)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!entry.target.classList.contains('enter')) {
                    entry.target.classList.add('enter')
                }
            } else {
                if (entry.target.classList.contains('enter')) {
                    entry.target.classList.remove('enter')
                }
            }
        })
    }, {
        threshold: .7,
        rootMargin: '100px'
    })

    //Set background image from imgURL prop
    useEffect(() => {
        const sectionM = document.querySelector(`#Interior--${id}`)
        sectionM.style.setProperty('--interior-image', `url(${imageUrl})`);
    }, [])

    // Set navbar to fixed
    useEffect(() => {
        const navbar = document.querySelector('#navbar')
        navbar.style.position = 'absolute'
    })

    // Implement Observe on the HeaderInterior
    useEffect(() => {
        const headInterior = document.querySelector('#headerInteriorText')
        observer.observe(headInterior)
    }, [])

    return <div id="Interior">
        <div id="headerInterior">
            <div id="headerInteriorText">{title}</div>
        </div>
        <div id={`Interior--${id}`}>

        </div>
    </div>
}