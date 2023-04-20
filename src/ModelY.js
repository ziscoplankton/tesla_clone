

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
import HeroImg from './model/HeroImg.js'
// Model Images
// import ModelXHero1 from './css/model/images/modelY/ModelXHero1.jpeg'
// import ModelXHero2 from './css/model/images/modelY/ModelXHero2.jpeg'
// import ModelXHero3 from './css/model/images/modelY/ModelXHero3.jpeg'
// import ModelXHero4 from './css/model/images/modelY/ModelXHero4.jpeg'
import ModelYSafety from './css/model/images/modelY/ModelYSafety.jpeg'
import ModelYHero1 from './css/model/images/modelY/ModelYHero1.jpeg'
import ModelSVision from './css/model/images/modelS/ModelSVision.jpeg'
import Model3Hero5 from './css/model/images/model3/ModelSInterior.jpeg'

import ModelYInterior1 from './css/model/images/modelY/ModelYInterior1.jpeg'
import ModelYInterior2 from './css/model/images/modelY/ModelYInterior2.jpeg'

export default function ModelY(){

    return <>
        <Model 
            model="Model Y"
            folderIMG="modelY"
            para="Schedule a Demo Drive"
            rangeTitle="76 cu ft"
            rangeDetails="Cargo Space"
            speedTitle="330 mi"
            speedDetails="Range(EPA est.)"
            topPerfTitle="AWD"
            topPerfDetails="Dual Motor"
            peakPowerTitle=""
            peakPowerDetails=""
            navBarColor="#000"
        />
        <Hero 
            heroType="Two"
            heroID = 'Two'
            heroName="Safety"
            heroBgColor="white"
            model="ModelY"
            pointsforHeroNaked={{one: "Impact Protection", two: "Low Center of Gravity"}}
            heroImageName={ModelYSafety}
            heroSizes={{width: '100%', height: '400px'}}
            content={
                {
                    header: {
                        title: 'Safety',
                        para: 'Designed for Safety'
                    },
                    description: "Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards."
                    
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "View Inventory"
            }}
        />
        <HeroImg
            heroID="One"
            content={
                {
                    header: {
                        title: 'Utility',
                        para: 'A Place For Everything'

                    },
                    descriptionStart: "Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. ",
                    calltoAction: {
                        ctaOne: "Chat with a Tesla Advisor",
                        ctaTwo: "schedule a demo drive"
                    },
                    descriptionBetween: " to learn more about Model Y ",
                    descriptionEnd: " today."                                    
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "View Inventory"
            }}
            images = {{
                imgOne: {
                    url: ModelYInterior1,
                    title: "Versatible seating and storage for cargo and passengers"
                },
                imgTwo: {
                    url: ModelYInterior2,
                    title: "Room for up to seven with optional third row"
                }
            }}
        />
        <Hero
            heroType= 'One' 
            heroID = 'One'
            heroName="ModelY"
            heroBgColor="white"
            heroContentColor="white"
            contentColor ="var(--color-primary)"
            model="ModelS"
            heroImageName={ModelYHero1}
            heroSizes={{width: '100%', height: '80vh'}}
            heroContent={
                {
                    perkOne: {
                        title: '2',
                        details: 'Independent Motors'
                    },
                    perkTwo: {
                        title: '3.5 s',
                        details: '0-60 mph*'
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
                    descriptionStart: "Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road. ",
                    calltoAction: {
                        ctaOne: "Compare Models",
                        ctaTwo: " "
                    },
                    descriptionBetween: "  ",
                    descriptionEnd: " "
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "Compare Models"
            }}
        />
        <Hero 
            heroType="Two"
            heroID = 'One'
            heroName="Range"
            heroBgColor="white"
            heroContentColor="white"
            contentColor="black"
            model= "ModelY"
            heroVideoURL="ModelY/ModelYHero1.mp4"
            heroSizes={{width: '', height: ''}}
            heroContent={
                {
                    perkOne: {
                        title: '330 mi',
                        details: 'Range (EPA est.)'
                    },
                    perkTwo: {
                        title: '15 min',
                        details: 'Recharge up to 162 mi'
                    },
                    perkThree: {
                        title: '45,000 +',
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
                    descriptionStart: "Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 45,000 Superchargers worldwide, with six new locations opening every week. ",
                    calltoAction: {
                        ctaOne: "Chat with a Tesla Advisor",
                        ctaTwo: "schedule a demo drive"
                    },
                    descriptionBetween: " to learn more about Model Y ",
                    descriptionEnd: " today."                                    
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "Find My Route"
            }}
        />
        <Hero 
            heroType= 'One' 
            heroID = 'Three'
            heroName="Vision"
            heroBgColor="white"
            heroContentColor="white"
            contentColor ="var(--color-primary)"
            model="ModelY"
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
                        title: 'Circle',
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
                    descriptionStart: "Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.",
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "View Inventory"
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
                    descriptionStart: "With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky. ",
                    calltoAction: {
                        ctaOne: "Compare Models",
                        ctaTwo: " "
                    },
                    descriptionBetween: " ",
                    descriptionEnd: " "                                    
                }
            }
            cta = {{
                primary: "Order Now",
                secondary: "Order Now"
            }}
        />
        <ModelSpecs 
        ID="One"
        modelName = "Model Y"
        bgColor = "black"
        fontColor = "white"
        imgFolder="modelY"
        img="ModelYSpecs.jpeg"
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
                        details: "4,398 lbs",
                    },
                    perkThree: {
                        title: "*Acceleration",
                        details: "3.5 s 0-60",
                        asterix: "with rollout subtracted"
                    },
                    perkFour: {
                        title: "Max Cargo Volumen",
                        details: "76 cu ft",
                    },
                    perkFive: {
                        title: "Pange",
                        details: "303 miles (EPA est.)"
                    },
                    perkSix: {
                        title: "Top Speed",
                        details: "155 mph"
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
                        details: "Up to 5"
                    },
                    perkTen: {
                        title: "Warranty",
                        details: "Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 whichever comes first"
                    },
                    perkEleven: {
                        title: "Wheels",
                        details: "21\""
                    }, 
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
                        details: "4,363 lbs"
                    },
                    perkThree: {
                        title: "Acceleration",
                        details: "4.8 s 0-60 mph"
                    },
                    perkFour: {
                        title: "Max Cargo Volume",
                        details: "76 cu ft"
                    },
                    perkFive: {
                        title: "Range",
                        details: "330 miles (EPA est.)"
                    },
                    perkSix: {
                        title: "Top Speed",
                        details: "135 mph",
                    },
                    perkSeven: {
                        title: "Drive",
                        details: "Dual Motor All-Wheel Drive",
                    },
                    perkEight: {
                        title: "Displays",
                        details: "15\" Center Touchscreen"
                    },
                    perkNine: {
                        title: "Seating",
                        details: "Up to 7"
                    },
                    perkTen: {
                        title: "Wheels",
                        details: "19\" or 20\""
                    },
                    perkEleven: {
                        title: "Supercharging Max/Payment Type",
                        details: "250 kW Max; Pay Per Use"
                    }, 
                    perkTwelve: {
                        title: "Warranty",
                        details: "Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first"
                    } 
                }
            },
            ctaThree: {
                title: "All-Wheel Drive",
                perks: {
                    perkOne:{
                        title: "Battery",
                        details: "Standard Range"
                    },
                    perkTwo:{
                        title: "Weight",
                        details: "4,363 lbs"
                    },
                    perkThree: {
                        title: "Acceleration",
                        details: "5.0 s 0-60 mph"
                    },
                    perkFour: {
                        title: "Max Cargo Volume",
                        details: "76 cu ft"
                    },
                    perkFive: {
                        title: "Range",
                        details: "279 miles (EPA est.)"
                    },
                    perkSix: {
                        title: "Top Speed",
                        details: "135 mph",
                    },
                    perkSeven: {
                        title: "Drive",
                        details: "Dual Motor All-Wheel Drive",
                    },
                    perkEight: {
                        title: "Displays",
                        details: "15\' Center Touchscreen"
                    },
                    perkNine: {
                        title: "Seating",
                        details: "Up to 5"
                    },
                    perkTen: {
                        title: "Supercharging Max/Payment Type",
                        details: "230 kW Max; Pay Per Use"
                    }, 
                    perkEleven: {
                        title: "Wheels",
                        details: "19\" or 20\""
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
            name="Model Y"
            title="Model Y"
            imgFolder="modelY"
            imageName="ModelYFooter.jpeg"
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
