

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
import ModelSHero1 from './css/model/images/modelS/ModelSHero.jpeg'
import ModelSHero2 from './css/model/images/modelS/ModelSHero2.jpeg'
import ModelSHero3 from './css/model/images/modelS/ModelSHero3.jpeg'
import ModelSVision from './css/model/images/modelS/ModelSVision.jpeg'
import ModelSspecs from './css/model/images/modelS/ModelSspecs.jpeg'


export default function ModelS(){

    return <>
    <Model 
        model="Model S"
        folderIMG="modelS"
        para="Plaid"
        rangeTitle="396 mi"
        rangeDetails="Range (Epa est.)"
        speedTitle="1.99 s"
        speedDetails="0-60 mph*"
        topPerfTitle="200 mph"
        topPerfDetails="Top Speed"
        peakPowerTitle="1,020 hp"
        peakPowerDetails="Peak Power"
        navBarColor="#000"
    />
    <Interior id="1" title="Interior of the Future" imgURL="ModelSinterior" />
    <VideoCarousel 
    videos={[require('./css/model/video/ModelS/ModelS1.mp4'), require('./css/model/video/ModelS/ModelS2.mp4'), require('./css/model/video/ModelS/ModelS3.mp4'), , require('./css/model/video/ModelS/ModelS4.mp4'), , require('./css/model/video/ModelS/ModelS5.mp4')]}
    />
    <GridModel 
        imgFolder="modelS"
        imgURL={{image1: "ModelSinterior2", image2: "ModelSinterior3"}} 
        videoURL="ModelS/ModelSGrid.mp4"
        content={
            {
                gridOne: {
                    title: "Stay Connected", 
                    para: "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging"
                },
                gridTwo: {
                    title: "Immersive Sound",
                    para: "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality"
                },
                gridThree: {
                    title: "Room for Everything",
                    para: "With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off-and your luggage too. Compare Models"
                }
            }
        }
        id="One"
    />
    <Hero
        heroType= 'One' 
        heroID = 'One'
        heroName="Model S"
        heroBgColor="white"
        heroContentColor="white"
        contentColor ="var(--color-primary)"
        model="ModelS"
        heroImageName={ModelSHero1}
        heroSizes={{width: '100%', height: '80vh'}}
        heroContent={
            {
                perkOne: {
                    title: '1,020 hp',
                    details: 'Peak Power'
                },
                perkTwo: {
                    title: '9.23 s',
                    details: '@155 mph 1/4 mile'
                },
                perkThree: {
                    title: '1.99 s',
                    details: '0-60 mph*'
                }
            }
        }
        content={
            {
                header: {
                    title: 'Plaid',
                    para: 'Beyond Ludicrous'

                },
                descriptionStart: "Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. ",
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
            secondary: "Compare Models"
        }}
    />
    <HeroCarousel
        keyCarousel="One"
        nameCarousel="ModelImage"
        pageCarousel="ModelS"
        heroName="Electric Powertrain"
        heroBgColor="var(--background-color-secondary)"
        heroDescription= "Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions."
        heroImages={{
            imgOne: {
                url: "ModelSElectric1.jpeg",
                title: "Model S",
                details: "Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.",
                characs: {
                    speed: {
                        title: "3.1 s",
                        details: "0-60 mph"
                    },
                    range: {
                        title: "405 mi",
                        details: "Range (EPA est.)"
                    },
                    peak: {
                        title: "670 hp",
                        details: "Peak Power"
                    }
                }
            },
            imgTwo: {
                url: "ModelSElectric2.jpeg",
                title: "Model S Plaid",
                details: "Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.",
                characs: {
                    speed: {
                        title: "1.99s",
                        details: "0-60 mph"
                    },
                    range: {
                        title: "396 mi",
                        details: "Range (EPA est.)"
                    },
                    peak: {
                        title: "1,020 hp",
                        details: "Peak Power"
                    }
                }
            }
        }}
    />
    <Hero 
    heroType = 'One'
    heroID = 'Two'
    heroBgColor="black"
    heroContentColor="white"
    contentColor ="white"
    model= "ModelS"
    heroImageName={ModelSHero2}
    heroSizes={{width: '100%', height: '80vh'}}
    content={
        {
            header: {
                title: 'Exterior',
                para: 'Designed for Efficiency'

            },
            description: "With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.",
            
        }
    }
    cta = {{
        primary: "Order Now",
        secondary: "View Inventory"
    }}
    />
    <GridModel 
        imgFolder="modelS"
        imgURL={{image1: "ModelSexterior", image2: "ModelSexterior2", image3: "ModelSexterior3"}} 
        content={
            {
                gridOne: {
                    title: "Stay Connected", 
                    para: "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging"
                },
                gridTwo: {
                    title: "Immersive Sound",
                    para: "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality"
                },
                gridThree: {
                    title: "Room for Everything",
                    para: "With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off-and your luggage too. Compare Models"
                }
            }
        }
        id="Two"
    />
    <Hero 
        heroType="Two"
        heroID = 'One'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="black"
        model= "ModelS"
        heroVideoURL="ModelS/ModelSHero1.mp4"
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
        heroType="Two"
        heroID = 'Two'
        heroName="Safety"
        heroBgColor="white"
        model="ModelS"
        pointsforHeroNaked={{one: "Very Low Rollover Risk", two: "Impact Protection"}}
        heroImageName={ModelSHero3}
        heroSizes={{width: '100%', height: '400px'}}
        content={
            {
                header: {
                    title: 'Safety',
                    para: 'High Impact Protection'
                },
                description: "ModelS is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla's latest active safety features, such as Automatic Emergency Braking, at no extra cost."
                
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
        model="ModelS"
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
                descriptionStart: "Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. ",
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
            secondary: "View Inventory"
        }}
    />
    <ModelSpecs 
    ID="One"
    modelName = "Model S"
    bgColor = "black"
    fontColor = "white"
    imgFolder="modelS"
    img="ModelSspecs.jpeg"
    specsCta = {{
        ctaOne: {
            title: "Model S Plaid",
            perks: {
                perkOne:{
                    title: "Range (EPA est.)",
                    details: "396 mi"
                },
                perkTwo:{
                    title: "*Acceleration",
                    details: "1.99 s 0-60 mph",
                    asterix: "with rollout subtracted"
                },
                perkThree: {
                    title: "1/4 Mile",
                    details: "9.23@155 mph trap speed"
                },
                perkFour: {
                    title: "Top Speed",
                    details: "200 mph",
                    asterix: "when equipped with paid hardware upgrades"
                },
                perkFive: {
                    title: "Peak Power",
                    details: "1,020 hp"
                },
                perkSix: {
                    title: "Drag Coeeficient",
                    details: "0.208 Cd"
                },
                perkSeven: {
                    title: "*Wheels",
                    details: "19\" or 21\"",
                },
                perkEight: {
                    title: "Powertrain",
                    details: "Tri Motor",
                },
                perkNine: {
                    title: "Cargo",
                    details: "28 cu ft"
                },
                perkTen: {
                    title: "Supercharging Max",
                    details: "250 kW"
                },
                perkEleven: {
                    title: "Weight",
                    details: "4,766 lbs"
                } 
            }
        },
        ctaTwo: {
            title: "Model S",
            perks: {
                perkOne:{
                    title: "Range (EPA est.)",
                    details: "405 mi"
                },
                perkTwo:{
                    title: "Peak Power",
                    details: "670 hp"
                },
                perkThree: {
                    title: "Wheels",
                    details: "19\" or 21\""
                },
                perkFour: {
                    title: "Cargo",
                    details: "28 cu ft"
                },
                perkFive: {
                    title: "Acceleration",
                    details: "3.1s 0-60 mph"
                },
                perkSix: {
                    title: "Top speed",
                    details: "149 mph",
                },
                perkSeven: {
                    title: "Drag Coefficient",
                    details: "0.208 Cd",
                },
                perkEight: {
                    title: "Drag Coefficient",
                    details: "0.208 Cd"
                },
                perkNine: {
                    title: "Weight",
                    details: "4,561 lbs"
                },
                perkTen: {
                    title: "Supercharging Max",
                    details: "250 kW"
                } 
            }
        }
    }}
    ctaBtn= {{primary: "Compare Models"}}
    />
    <ModelFooter 
        id="One"
        name="Model S"
        title="Model S"
        imgFolder="modelS"
        imageName="ModelSFooter.jpeg"
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