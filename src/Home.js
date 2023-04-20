import './css/home/app.css'

import { useEffect } from 'react'

import Section from './components/home/Section.js'
import Navbar from './components/home/Navbar.js'
import Cta from './components/home/Cta.js'

export default function Home() {

    // Animate sections on intersection
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
            const main = entry.target.children[0]
            const footer = entry.target.children[1]
            const btnPrimary = entry.target.children[1].children[0]
            const btnSecondary = entry.target.children[1].children[1]

            if(btnPrimary && btnSecondary){
                btnPrimary.style.setProperty('--pickSide', '-20%')
                btnSecondary.style.setProperty('--pickSide', '20%')
            }
            const animationElements = [
                entry.target.children[0],
                entry.target.children[1],
                entry.target.children[1].children[0],
                entry.target.children[1].children[1]
            ]
            if(entry.isIntersecting) {
                animationElements.map((elem) => {
                    if(elem){
                        elem.classList.add('animate')
                        elem.classList.remove('remove')
                    }
                })

            } else {
                animationElements.map((elem) => {
                    if(elem){
                        elem.classList.remove('animate')
                        elem.classList.add('remove')
                    }
                })
            }
        })
    }, {threshold: .7})

    useEffect(() => {
        const sections = document.querySelectorAll('#section')
        sections.forEach((section) => {
            observer.observe(section)
        })
    },[])


    return <>
        <div id='blur'></div>
        <Navbar />
        <Section className="model3" title="Model3" para="Leasing starting at $349/mo">
            <Cta cta="View Inventory" type="primary" />
            <Cta cta="Custom Order" type="secondary" />
        </Section>
        <Section className="modelY" title="ModelY" para="Schedule a Demo Drive">
            <Cta cta="View Inventory" type="primary" />
            <Cta cta="Custom Order" type="secondary" />
        </Section>
        <Section className="modelS" title="ModelS" para="Schedule a Demo Drive">
            <Cta cta="View Inventory" type="primary" />
            <Cta cta="Custom Order" type="secondary" />
        </Section>
        <Section className="modelX" title="ModelX" para="Schedule a Demo Drive">
            <Cta cta="View Inventory" type="primary" />
            <Cta cta="Custom Order" type="secondary" />
        </Section>
        <Section className="solarPanels" title="Solar Panels" para="Lowest Cost Solar Panels in America">
            <Cta cta="View Inventory" type="primary" />
            <Cta cta="Custom Order" type="secondary" />
        </Section>
        <Section className="solarRoof" title="Solar Roof" para="Produce Clean Energy From Your Roof">
            <Cta cta="View Inventory" type="primary" />
            <Cta cta="Custom Order" type="secondary" />
        </Section>
        <Section className="accessories" title="Accessories">
            <Cta cta="Shop Now" type="primary accessories" />
        </Section>
        <footer>
            <ul>
                <li>Tesla © 2023</li>
                <li>Privacy & Legal</li>
                <li>Vehicle Recalls</li>
                <li>Careers</li>
                <li>News</li>
                <li>Engage</li>
                <li>Location</li>
            </ul>
        </footer>
    </>
}