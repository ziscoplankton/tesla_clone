// Model Pages imports/components
import Model from './model/Model.js'
import Interior from './components/model/Interior.js'
import VideoCarousel from './components/model/VideoCarousel.js'
import GridModel from './components/model/GridModel.js'
import Hero from './model/Hero.js'
import HeroDetails from './model/HeroDetails.js'
import HeroCarousel from './model/HeroCarousel.js'
import ModelSpecs from './model/ModelSpecs.js'
import ModelFooter from './model/ModelFooter.js'
// Model Images
import Model3Hero1 from './css/model/images/model3/Model3Hero.jpeg'
import Model3Hero2 from './css/model/images/model3/Model3Hero2.jpeg'
import Model3Hero3 from './css/model/images/model3/Model3Hero3.jpeg'
import Model3Hero4 from './css/model/images/model3/Model3Hero4.jpeg'
import Model3Hero5 from './css/model/images/model3/ModelSInterior.jpeg'
import ModelSVision from './css/model/images/modelS/ModelSVision.jpeg'

import './css/model/adjustements.css'
export default function Model3() {

    return <>
        <Model 
            model="Model 3"
            folderIMG="model3"
            para="Schedule a Demo Drive"
            rangeTitle="3.1 s"
            rangeDetails="0-60 mph*"
            speedTitle="358 mi"
            speedDetails="Range (EPA est.)"
            topPerfTitle="AWD"
            topPerfDetails="Dual Motor"
            peakPowerTitle=""
            peakPowerDetails=""
            navBarColor="#FFF"
        />
        <Hero 
            heroType="Two"
            heroID = 'Two'
            heroName="Safety"
            heroBgColor="white"
            model="Model3"
            pointsforHeroNaked={{one: "Very Low Rollover Risk", two: "Impact Protection"}}
            heroImageName={Model3Hero4}
            heroSizes={{width: '100%', height: '400px'}}
            content={
                {
                    header: {
                        title: 'Safety',
                        para: 'Built for Safety'

                    },
                    descriptionStart: "Safety is the most important part of every Tesla. We design our vehicles to",
                    calltoAction: {
                        ctaOne: " exceed safety standards",
                        ctaTwo: ""
                    },
                    descriptionBetween: ".",
                    descriptionEnd: " "
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
            heroName="Model3"
            heroBgColor="white"
            heroContentColor="white"
            contentColor ="var(--color-primary)"
            model="Model3"
            heroImageName={Model3Hero1}
            heroSizes={{width: '100%', height: '80vh'}}
            heroContent={
                {
                    perkOne: {
                        title: 
                            '3.1 s ',
                        details: '0-60 mph*'
                    },
                    perkTwo: {
                        title: '162 mph',
                        details: 'Top Speed'
                    },
                    perkThree: {
                        title: 'AWD',
                        details: 'Dual Motor'
                    }
                }
            }
            content={
                {
                    header: {
                        title: 'Performance',
                        para: 'Quickest Acceleration'

                    },
                    descriptionStart: "Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. ",
                    calltoAction: {
                        ctaOne: "Chat with a Tesla Advisor",
                        ctaTwo: "schedule a demo drive"
                    },
                    descriptionBetween: " to learn more about Model 3 or ",
                    descriptionEnd: " today."
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
        model= "Model3"
        heroImageName={Model3Hero3}
        heroSizes={{width: '', height: ''}}
        heroContent={
            {
                perkOne: {
                    title: '405 mi',
                    details: 'Range (EPA est.)'
                },
                perkTwo: {
                    title: '15 min',
                    details: 'Recharge up to 200 mi'
                },
                perkThree: {
                    title: '40,000 +',
                    details: 'Global Superchargers'
                }
            }
        }
        content={
            {
                header: {
                    title: 'Range',
                    para: 'Go Anywhere'

                },
                descriptionStart: "With up to 405 miles of estimated range and access to the world's largest and most powerful fast charging network, you'll spend less time plugged in and more time on the road. ",
                calltoAction: {
                    ctaOne: "Chat with a Tesla Advisor",
                    ctaTwo: "schedule a demo drive"
                },
                descriptionBetween: " to learn more about Model S ",
                descriptionEnd: " today."                                    
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Find My Route"
        }}
    />

        <Hero 
            heroType = 'One'
            heroID = 'Four'
            heroName="Model3"
            heroBgColor="white"
            heroContentColor="white"
            contentColor ="var(--color-primary)"
            model= "Model3"
            heroImageName={Model3Hero2}
            heroSizes={{width: '100%', height: '80vh'}}
            heroContent={
                {
                    perkOne: {
                        title: '2',
                        details: 'Independent Motors'
                    },
                    perkTwo: {
                        title: '10 ms',
                        details: 'Torque Response'
                    },
                    perkThree: {
                        title: 'logo',
                        details: 'All-Weather Control'
                    }
                }
            }
            content={
                {
                    header: {
                        title: 'All-Wheel Drive',
                        para: 'Dual Motor'

                    },
                    description: "Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.",
                    
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "View Inventory"
            }}
        />

    <Hero 
        heroType= 'One' 
        heroID = 'Three'
        heroName="Vision"
        heroBgColor="white"
        heroContentColor="white"
        contentColor ="var(--color-primary)"
        model="Model3"
        heroImageName={ModelSVision}
        heroSizes={{width: '100%', height: '80vh'}}
        heroContent={
            {
                perkOne: {
                    title: '360',
                    details: 'Degrees of Visibility'
                },
                perkTwo: {
                    title: '250 m',
                    details: 'of Powerful Visual Processing'
                },
                perkThree: {
                    title: 'logo',
                    details: 'Tesla Vision'
                }
            }
        }
        content={
            {
                header: {
                    title: 'Autopilot',
                    para: 'Future of Driving'

                },
                descriptionStart: "Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. ",
                calltoAction: {
                    ctaOne: "Chat with a Tesla Advisor",
                    ctaTwo: "schedule a demo drive"
                },
                descriptionBetween: " to learn more about Model 3 ",
                descriptionEnd: " today."
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Learn More"
        }}
    />
    <Hero 
        heroType= 'One' 
        heroID = 'Six'
        heroName="Vision"
        heroBgColor="white"
        heroContentColor="white"
        contentColor ="var(--color-primary)"
        model="Model3"
        heroImageName={Model3Hero5}
        heroSizes={{width: '100%', height: '80vh'}}
        heroContent={
            {
                perkOne: {
                    title: '15 inch',
                    details: 'Touchscreen Display'
                },
                perkTwo: {
                    title: '',
                    details: 'Over-the-air Software Updates'
                },
                perkThree: {
                    title: '',
                    details: 'All-Glass Roof'
                }
            }
        }
        content={
            {
                header: {
                    title: 'Interior',
                    para: 'Built Around the Driver'

                },
                description: "The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.",

            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Order Now"
        }}
    />
    <ModelSpecs 
    ID="One"
    modelName = "Model 3"
    bgColor = "black"
    fontColor = "white"
    imgFolder="model3"
    img="Model3Specs.jpeg"
    specsCta = {{
        ctaOne: {
            title: "Performance",
            perks: {
                perkOne:{
                    title: "Battery",
                    details: "Long Range"
                },
                perkTwo:{
                    title: "Weight",
                    details: "4,048 lbs",
                },
                perkThree: {
                    title: "*Acceleration",
                    details: "3.1 s 0-60",
                    asterix: "with rollout subtracted"
                },
                perkFour: {
                    title: "Cargo",
                    details: "23 cu ft",
                },
                perkFive: {
                    title: "Pange",
                    details: "315 miles (EPA est.)"
                },
                perkSix: {
                    title: "Displays",
                    details: "15\" Center Touchscreen"
                },
                perkSeven: {
                    title: "Drive",
                    details: "Dual Motor All-Wheel Drive",
                },
                perkEight: {
                    title: "Supercharging Max/Payment Type",
                    details: "250 kW Max: Pay Per Use",
                },
                perkNine: {
                    title: "Seatings",
                    details: "5 Adults"
                },
                perkTen: {
                    title: "Onboard Charger Max",
                    details: "11.5 kW max (48A)"
                },
                perkEleven: {
                    title: "Wheels",
                    details: "20\""
                }, 
                perkTwelve: {
                    title: "Warranty",
                    details: "Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 whichever comes first"
                } 
            }
        },
        ctaTwo: {
            title: "Long Range AWD",
            perks: {
                perkOne:{
                    title: "Battery",
                    details: "Long Range"
                },
                perkTwo:{
                    title: "Weight",
                    details: "4,034 lbs"
                },
                perkThree: {
                    title: "Acceleration",
                    details: "4.2 s 0-60 mph"
                },
                perkFour: {
                    title: "Cargo",
                    details: "23 cu ft"
                },
                perkFive: {
                    title: "Range",
                    details: "358 miles (EPA est.)"
                },
                perkSix: {
                    title: "Displays",
                    details: "15\' Center Touchscreen",
                },
                perkSeven: {
                    title: "Drive",
                    details: "Dual Motor All-Wheel Drive",
                },
                perkEight: {
                    title: "Supercharging Max/Payment Type",
                    details: "250 kW Max: Pay Per Use"
                },
                perkNine: {
                    title: "Seating",
                    details: "5 Adults"
                },
                perkTen: {
                    title: "Onboard Charger Max",
                    details: "11.5 kW max (48A)"
                }, 
                perkTwelve: {
                    title: "Warranty",
                    details: "Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first"
                } 
            }
        },
        ctaThree: {
            title: "Rear-Wheel Drive",
            perks: {
                perkOne:{
                    title: "Battery",
                    details: "Standard Range"
                },
                perkTwo:{
                    title: "Weight",
                    details: "3,862 lbs"
                },
                perkThree: {
                    title: "Acceleration",
                    details: "5.8 s 0-60 mph"
                },
                perkFour: {
                    title: "Cargo",
                    details: "23 cu ft"
                },
                perkFive: {
                    title: "Range",
                    details: "272 miles (EPA est.)"
                },
                perkSix: {
                    title: "Displays",
                    details: "15\' Center Touchscreen",
                },
                perkSeven: {
                    title: "Drive",
                    details: "Rear-Wheel Drive",
                },
                perkEight: {
                    title: "Supercharging Max/Payment Type",
                    details: "170 kW Max: Pay Per Use"
                },
                perkNine: {
                    title: "Seating",
                    details: "5 Adults"
                },
                perkTen: {
                    title: "Onboard Charger Max",
                    details: "7.6 kW max (48A)"
                }, 
                perkTwelve: {
                    title: "Warranty",
                    details: "Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 100,000 mi, whichever comes first"
                } 
            }
        }
    }}
    ctaBtn= {{primary: "Compare Models"}}
    />
    <ModelFooter 
        id="One"
        name="Experience Model 3"
        title="Model 3"
        content="Leasing starting at $349/mo"
        imgFolder="model3"
        imageName="Model3Footer.jpeg"
        bgColor="white"
        cta = {{
            primary: "Order Now",
            secondary: "View Inventory"
        }}
        tips= "Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change."
        learn="Learn more about Standard Connectivity and any limitations"
    />
    
    </>
}



