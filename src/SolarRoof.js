
import Model from "./model/Model.js"
import Hero from "./model/Hero.js"
import HeroCarousel from "./model/HeroCarousel.js"
import ModelSpecs from "./model/ModelSpecs.js"
import ModelFooter from './model/ModelFooter.js'

import './css/model/adjustements.css'

import SolarRoofHero1 from './css/model/images/solarRoof/SolarRoofHero1.jpeg'
import SolarRoofHero2 from './css/model/images/solarRoof/SolarRoofHero2.jpeg'
import SolarRoofHero3 from './css/model/images/solarRoof/SolarRoofHero3.jpeg'
import SolarRoofHero4 from './css/model/images/solarRoof/SolarRoofHero4.jpeg'
export default function SolarRoof(){
    return <>
    <Model 
        model="Solar Roof"
        folderIMG="solarRoof"
        model_name="Solar Roof"
        para=""
        rangeTitle=""
        rangeDetails="Beautiful Solar"
        speedTitle="25-Year"
        speedDetails="Tile Warranty"
        topPerfTitle="24/7"
        topPerfDetails="Outage Protection"
        peakPowerTitle=" "
        peakPowerDetails=" "
        navBarColor="#FFF"
    />
    <Hero
        heroType= 'One' 
        heroID = 'One'
        heroName="Solar Roof"
        heroBgColor="white"
        heroContentColor="white"
        contentColor ="var(--color-primary)"
        model="solarRoof"
        heroImageName={SolarRoofHero1}
        heroSizes={{width: '100%', height: '80vh'}}

        content={
            {
                header: {
                    title: 'Design',
                    para: 'Complement Your Home\' Aesthetic'

                },
                descriptionStart: "Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. ",
                calltoAction: {
                    ctaOne: "Schedule a virtual consultation ",
                    ctaTwo: " "
                },
                descriptionBetween: " ",
                descriptionEnd: " with a Tesla Advisor to learn more."
            }
        }
        cta = {{
            primary: "Order Now"
        }}
    />
    <Hero 
        heroType="Two"
        heroID = 'Two'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="black"
        model= "SolarRoof"
        heroImageName={SolarRoofHero2}
        heroSizes={{width: '', height: ''}}
        content={
            {
                header: {
                    title: 'Energy Storage',
                    para: 'Protection Against Outages'

                },
                description: "Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.",
                                                 
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Learn More"
        }}
    />
    <Hero 
        heroType="Two"
        heroID = 'One'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="black"
        model= "solarRoof"
        heroVideoURL="SolarRoof/SolarRoofHero1.mp4"
        heroSizes={{width: '', height: ''}}
        content={
            {
                header: {
                    title: 'Durability',
                    para: 'Take on the Elements'

                },
                description: "Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come.",
                                  
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Find My Route"
        }}
    />
    <Hero 
        heroType="Two"
        heroID = 'Three'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="black"
        model= "SolarRoof"
        heroImageName={SolarRoofHero3}
        heroSizes={{width: '', height: ''}}
        content={
            {
                header: {
                    title: 'Efficiency',
                    para: 'Maximum Solar Production'

                },
                descriptionStart: "Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful. With Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. And built-in connectivity ensures ",
                calltoAction: {
                    ctaOne: "Tesla Solar Inverter",
                    ctaTwo: ""
                },
                descriptionBetween: " ",
                descriptionEnd: "continues to improve with each over-the-air software update."                                    
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Find My Route"
        }}
    />
    <Hero
        heroType= 'One' 
        heroID = 'Two'
        heroName="SolarRoof"
        heroBgColor="white"
        heroContentColor="white"
        contentColor ="var(--color-primary)"
        model="ModelS"
        heroImageName={SolarRoofHero4}
        heroSizes={{width: '100%', height: '80vh'}}
        content={
            {
                header: {
                    title: 'Control',
                    para: 'Monitor and Optimize'

                },
                description: "With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.",
                
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Compare Models"
        }}
    />
    <ModelSpecs 
        ID="One"
        modelName = "Solar Roof"
        bgColor = "black"
        fontColor = "white"
        imgFolder="solarRoof"
        img="SolarRoofSpecs.jpeg"
        specsCta = {{
            ctaOne: {
                title: "Model S Plaid",
                perks: {
                    perkOne:{
                        title: "Tiel and Power Warranty",
                        details: "25 years"
                    },
                    perkTwo:{
                        title: "*Fire Rating",
                        details: "Class A (highest rating)",
                    },
                    perkThree: {
                        title: "Solar Glas Tiles",
                        details: "72 W"
                    },
                    perkFour: {
                        title: "Hail Rating",
                        details: "Class 3",
                    },
                    perkFive: {
                        title: "Steel Tiles",
                        details: "Corrosion and weather resistant"
                    },
                    perkSix: {
                        title: "Roof Pitch",
                        details: "> 2:12"
                    },
                    perkSeven: {
                        title: "*Wind Rating",
                        details: "Class F (highest rating)",
                    },
                }
            },
        }}
        ctaBtn= {{primary: "Compare Models"}}
    />
    <ModelFooter 
        id="One"
        name="Solar Roof"
        title="Solar Roof"
        bgColor="black"
        cta = {{
            primary: "Order Now",
            secondary: "Schedule a Virtual Consultation"
        }}
        learn="Get Updates"
    />

    </>
}