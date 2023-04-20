
import Model from "./model/Model.js"
import Hero from "./model/Hero.js"
import HeroCarousel from "./model/HeroCarousel.js"
import ModelSpecs from "./model/ModelSpecs.js"
import ModelFooter from './model/ModelFooter.js'

import './css/model/adjustements.css'

import SolarPanelHero1 from './css/model/images/solarPanel/SolarPanelHero2.jpeg'
import SolarPanelHero3 from './css/model/images/solarPanel/SolarPanelHero3.jpeg'
//import SolarRoofHero2 from './css/model/images/solarPanel/So.jpeg'
// import SolarRoofHero3 from './css/model/images/solarPanel/SolarPanelHero3.jpeg'
import SolarPanelHero4 from './css/model/images/solarPanel/SolarPanelHero4.jpeg'
import SolarPanelHero5 from './css/model/images/solarPanel/SolarPanelHero5.jpeg'
export default function SolarPanel(){
    return <>

    <Model 
        model="Solar Panels"
        folderIMG="home"
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
{/* heroVideoURL="SolarPanel/SolarPanelHero1.mp4" */}

    <Hero 
        heroType="Two"
        heroID = 'One'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="black"
        model= "SolarPanel"
        heroVideoURL="SolarPanel/SolarPanelHero1.mp4"
        heroSizes={{width: '', height: ''}}
        content={
            {
                header: {
                    title: 'Savings',
                    para: 'Electricity For Less'

                },
                descriptionStart: "Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with ",
                calltoAction: {
                    ctaOne: "Tesla's price match guarantee",
                    ctaTwo: "schedule a virtual consultation"
                },
                descriptionBetween: " and take control of your monthly electricity bill. ",
                descriptionEnd: " with a Tesla Adivsor to learn more."                                    
            }
        }
        cta = {{
            primary: "See Your Savings",
            secondary: "Schedule aa Virtual Consultation"
        }}
    />
    <Hero 
        heroType="Two"
        heroID = 'Two'
        heroName="Safety"
        heroBgColor="white"
        model="SolarPanel"
        pointsforHeroNaked={{one: "No Visible Grid", two: "Low-Profile"}}
        heroImageName={SolarPanelHero1}
        heroSizes={{width: '100%', height: '400px'}}
        content={
            {
                header: {
                    title: 'Design',
                    para: 'Sleek and Durable'

                },
                descriptionStart: "Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. ",
                calltoAction: {
                    ctaOne: "Schedule a virtual consultation",
                    ctaTwo: ""
                },
                descriptionBetween: " ",
                descriptionEnd: " with a Tesla Advisor to learn more. "
            }
        }
        cta = {{
            primary: "Learn More",
            secondary: "Order now"
        }}
        />
        <Hero
            heroType= 'One' 
            heroID = 'One'
            heroName="Solar Panel"
            heroBgColor="white"
            heroContentColor="white"
            contentColor ="var(--color-primary)"
            model="ModelS"
            heroImageName={SolarPanelHero3}
            heroSizes={{width: '100%', height: '80vh'}}

            content={
                {
                    header: {
                        title: 'Powerwall',
                        para: 'Home Battery Backup'

                    },
                    descriptionStart: "Your Powerwall can be bundled with solar, allowing you to generate clean energy and store it for use anytime—at night or during an outage. ",
                    calltoAction: {
                        ctaOne: "Chat with a Tesla Advisor",
                        ctaTwo: "request a call"
                    },
                    descriptionBetween: " or ",
                    descriptionEnd: " to learn more."
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "Compare Models"
            }}
    />
        <Hero
            heroType= 'One' 
            heroID = 'Three'
            heroName="Solar Panel"
            heroBgColor="white"
            heroContentColor="white"
            contentColor ="var(--color-primary)"
            model="SolarPanel"
            heroVideoURL={'SolarPanel/SolarPanelHero2.mp4'}
            heroSizes={{width: '100%', height: '80vh'}}

            content={
                {
                    header: {
                        title: 'Power On',
                        para: 'Order and Installation'

                    },
                    descriptionStart: "From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. ",
                    calltoAction: {
                        ctaOne: "Chat with a Tesla Advisor",
                        ctaTwo: "request a call"
                    },
                    descriptionBetween: " or ",
                    descriptionEnd: " to learn more."
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "Learn More"
            }}
    />
   <Hero 
        heroType="Two"
        heroID = 'Three'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="black"
        model= "SolarPanel"
        heroImageName={SolarPanelHero4}
        heroSizes={{width: '', height: ''}}
        content={
            {
                header: {
                    title: 'Efficiency',
                    para: 'Maximum Solar Production'

                },
                descriptionStart: "Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by ",
                calltoAction: {
                    ctaOne: "Tesla Solar Inverter",
                    ctaTwo: ""
                },
                descriptionBetween: " ",
                descriptionEnd: ", your fully integrated system is safe and reliable."                                    
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
        heroImageName={SolarPanelHero5}
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
        imgFolder="solarPanel"
        img="SolarPanelHero6.jpeg"
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
        title="Power Your Home"
        bgColor="black"
        cta = {{
            primary: "Order Now",
            secondary: "Schedule a Virtual Consultation"
        }}
        learn="Get Updates"
    />
    </>
}