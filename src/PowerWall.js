
import Model from "./model/Model.js"
import Hero from "./model/Hero.js"
import HeroCarousel from "./model/HeroCarousel.js"
import ModelSpecs from "./model/ModelSpecs.js"
import ModelFooter from './model/ModelFooter.js'

import './css/model/adjustements.css'

import PowerWallHero1 from './css/model/images/powerWall/PowerWallHero1.jpeg'
import PowerWallHero2 from './css/model/images/powerWall/PowerWallHero2.jpeg'
import PowerWallHero3 from './css/model/images/powerWall/PowerWallHero3.jpeg'
// import PowerWallHero4 from './css/model/images/powerWall/PowerWallHero4.jpeg'
export default function PowerWall(){
    return <>
    <Model 
        model="Power wall"
        folderIMG="home"
        model_name="Solar Roof"
        para=""
        rangeTitle=""
        rangeDetails="Backup Energy Storage"
        speedTitle="24/7"
        speedDetails="Outage Protection"
        topPerfTitle=""
        topPerfDetails="Energy Independent"
        peakPowerTitle=" "
        peakPowerDetails=" "
        navBarColor="#FFF"
    />
    <Hero
        heroType= 'One' 
        heroID = 'One'
        heroName="PowerWall"
        heroBgColor="white"
        heroContentColor="white"
        contentColor ="var(--color-primary)"
        model="PowerWall"
        heroImageName={PowerWallHero1}
        heroSizes={{width: '100%', height: '80vh'}}
        heroContent={
            {
                perkOne: {
                    title: 'logo',
                    details: 'Use Energy During Outages'
                },
                perkTwo: {
                    title: 'logo',
                    details: 'Recharge With Solar'
                },
                perkThree: {
                    title: 'logo',
                    details: 'Keep Appliances Running'
                }
            }
        }
        content={
            {
                header: {
                    title: 'Security',
                    para: 'Backup Protection'

                },
                description: "Powerwall is an integrated battery system that stores your solar energy for backup protection, so when the grid goes down your power stays on. Your system detects outages and automatically recharges with sunlight to keep your appliances running for days."
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
        heroName="Vision"
        heroBgColor="white"
        heroContentColor="white"
        contentColor ="var(--color-primary)"
        model="PowerWall"
        heroImageName={PowerWallHero2}
        heroSizes={{width: '100%', height: '80vh'}}
        heroContent={
            {
                perkOne: {
                    title: '$',
                    details: 'Customize For Savings'
                },
                perkTwo: {
                    title: '24/7',
                    details: 'Instant Alerts'
                },
                perkThree: {
                    title: 'logo',
                    details: 'Manage Your Energy'
                }
            }
        }
        content={
            {
                header: {
                    title: 'Control',
                    para: 'Monitor and Optimize'

                },
                description: "With the Tesla app, you can monitor your solar energy in real time. Set your preferences to optimize for energy independence, outage protection or savings. Control your system from anywhere with remote access and instant alerts.",
                
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "View Inventory"
        }}
    />
    <Hero 
        heroType="Two"
        heroID = 'One'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="black"
        model= "PowerWall"
        heroImageName={PowerWallHero3}
        heroSizes={{width: '', height: ''}}
        heroContent={
            {
                perkOne: {
                    title: 'logo',
                    details: 'Child and Pet Friendly'
                },
                perkTwo: {
                    title: '10x',
                    details: 'Scalable'
                },
                perkThree: {
                    title: 'logo',
                    details: 'Water Resistant and Tough'
                }
            }
        }
        content={
            {
                header: {
                    title: 'Design',
                    para: 'Modern and Compact'

                },
                descriptionStart: "With easy installation and a minimalist design, Powerwall complements a variety of home styles and solar systems. The compact, all-in-one construction features versatile mounting options for indoor or outdoor spaces. ",
                calltoAction: {
                    ctaOne: "Chat with an energy advisor",
                    ctaTwo: ""
                },
                descriptionBetween: " ",
                descriptionEnd: " to ask any questions about Tesla Powerwall."                                    
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Schedule a Virtual Consultation"
        }}
    />
    <ModelSpecs 
        ID="One"
        modelName = "Power Wall"
        bgColor = "black"
        fontColor = "white"
        imgFolder="powerWall"
        img="PowerWallHero4.jpeg"
        specsCta = {{
            ctaOne: {
                title: "Powerwall+",
                perks: {
                    perkOne:{
                        title: "Energy Capacity",
                        details: "13.5 kWh*"
                    },
                    perkTwo:{
                        title: "*Inverter",
                        details: "Efficiency 97.5% Maximum Power Point Trackers: 4 Solar Input",
                    },
                    perkThree: {
                        title: "On-Grid Power",
                        details: "7.6 kVa / 5.8 kVa continuous†"
                    },
                    perkFour: {
                        title: "Installation",
                        details: "Integrated inverted and system controller -4°F to 122°F Water and dust resistance",
                    },
                    perkFive: {
                        title: "Backup Power",
                        details: "9.6kW/ 7kW continuous† 22kW / 10kW peak† 118A max LRA start Seamless backup transition"
                    },
                    perkSix: {
                        title: "Certifications",
                        details: "Meets North American safety and EMI standards"
                    },
                    perkSeven: {
                        title: "Size and Weight",
                        details: "L x W x D 62.8 in x 29.7 in x 6.3 in 343.9 lbs",
                    },
                    perkEight: {
                        title: 'Warranty',
                        details: '10 years'
                    }
                }
            },
            ctaTwo: {
                title: "Powerwall",
                perks: {
                    perkOne:{
                        title: "Energy Capacity",
                        details: "13.5 kWh*"
                    },
                    perkTwo:{
                        title: "Installation",
                        details: "Floor or wall mounted Indoor or outdoor Up to 10 Powerwalls -4°F to 122°F Water and dust resistance",
                    },
                    perkThree: {
                        title: "On-Grid Power",
                        details: "5.8 kVa continuous†"
                    },
                    perkFour: {
                        title: "Certifications",
                        details: "Meets North American safety and EMI standards",
                    },
                    perkFive: {
                        title: "Backup Power",
                        details: "10kW peak 106A LRA start Seamless backup transition"
                    },
                    perkSix: {
                        title: "Warranty",
                        details: "10 years"
                    },
                    perkSeven: {
                        title: "Size and Weight",
                        details: "L x W x D 45.3 in x 29.6 in x 5.75 in 251.3 lbs",
                    },
                }
            }
        }}
        ctaBtn= {{primary: "Compare Models"}}
    />
    <ModelFooter 
        id="One"
        name="Solar Roof"
        title="Power Your Everything"
        bgColor="black"
        cta = {{
            primary: "Order Now",
            secondary: "Chat with Energy Advisor"
        }}
        learn="Get Energy Updates"
    />
</>
}