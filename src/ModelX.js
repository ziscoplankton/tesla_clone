

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
import ModelXHero1 from './css/model/images/modelX/ModelXHero1.jpeg'
import ModelXHero2 from './css/model/images/modelX/ModelXHero2.jpeg'
import ModelXHero3 from './css/model/images/modelX/ModelXHero3.jpeg'
import ModelXHero4 from './css/model/images/modelX/ModelXHero4.jpeg'
import ModelXSafety from './css/model/images/modelX/ModelXSafety.jpeg'
import ModelSVision from './css/model/images/modelS/ModelSVision.jpeg'

export default function ModelX(){

    return <>
    <Model 
        model="Model X"
        folderIMG="modelX"
        para="Plaid"
        rangeTitle="333mi"
        rangeDetails="Range (Epa est.)"
        speedTitle="2.5 s"
        speedDetails="0-60 mph*"
        topPerfTitle="9.9s"
        topPerfDetails="1/4 Mile"
        peakPowerTitle="1,020 hp"
        peakPowerDetails="Peak Power"
        navBarColor="#000"
    />
    <Interior id="1" title="Interior of the Future" imgURL="ModelSinterior" />
    <VideoCarousel videos={[require('./css/model/video/ModelX/ModelX1.mp4'),require('./css/model/video/ModelX/ModelX2.mp4'),require('./css/model/video/ModelX/ModelX3.mp4'), require('./css/model/video/ModelX/ModelX4.mp4'), require('./css/model/video/ModelX/ModelX5.mp4')]}/>
    <GridModel 
        imgFolder="modelX"
        imgURL={{image1: "ModelXInterior", image2: "ModelXInterior2"}} 
        content={
            {
                gridOne: {
                    title: "Stay Connected", 
                    para: "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging"
                },
                gridTwo: {
                    title: "",
                    para: ""
                },
                gridThree: {
                    title: "Sublime Sound",
                    para: "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
                }
            }
        }
        id="One"
    />
    <Hero 
    heroType="One"
    heroID = 'Seven'
    heroName="ModelX"
    heroBgColor="white"
    heroContentColor="white"
    contentColor="var(--color-primary)"
    model= "ModelX"
    heroImageName={ModelXHero1}
    heroSizes={{width: '', height: '80vh'}}
    heroContent={
        {
            perkOne: {
                title: '1,020 hp',
                details: 'Peak Power'
            },
            perkTwo: {
                title: '9.9 s',
                details: '1/4 Mile'
            },
            perkThree: {
                title: '2.5 s',
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
            descriptionStart: "With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. ",
            calltoAction: {
                ctaOne: "Chat with a Tesla Advisor",
                ctaTwo: "schedule a demo drive"
            },
            descriptionBetween: " to learn more about Model X ",
            descriptionEnd: " today."                                    
        }
    }
    cta = {{
        primary: "Order Now",
        secondary: "View Inventory"
    }}
    />
    <HeroCarousel
    keyCarousel="One"
    nameCarousel="ModelImage"
    pageCarousel="ModelX"
    heroName="Electric Powertrain"
    heroBgColor="var(--background-color-secondary)"
    heroDescription= "Model X platforms unite powertrain and battery technologies for an unrivaled combination of performance, range and efficiency. New module and pack thermal architecture allows for faster charging and gives you more power and endurance in all conditions."
    heroImages={{
        imgOne: {
            url: "ModelSElectric1.jpeg",
            title: "Model X",
            details: "Dual Motor All-Wheel Drive platform has the longest range, and now delivers insane power and accelerations",
            characs: {
                speed: {
                    title: "3.8 s",
                    details: "0-60 mph"
                },
                range: {
                    title: "348 mi",
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
            title: "Model X Plaid",
            details: "Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-slevved rotor that maintains 1,000+ horsepower all the way to top speed.",
            characs: {
                speed: {
                    title: "2.5 s*",
                    details: "0-60 mph"
                },
                range: {
                    title: "333 mi",
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
        heroType="Two"
        heroID = 'Two'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="var(--color-primary)"
        model= "ModelX"
        heroImageName={ModelXHero2}
        heroSizes={{width: '', height: ''}}
        heroContent={
            {
                perkOne: {
                    title: '92ft',
                    details: 'Up to 92 ft of Storage'
                },
                perkTwo: {
                    title: '5,000 lbs',
                    details: 'Two up to 5,000 lbs'
                },
                perkThree: {
                    title: 'Falcon',
                    details: 'Wing Doors'
                }
            }
        }
        content={
            {
                header: {
                    title: 'Utility',
                    para: 'Even More Capable'

                },
                description: "With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go."                                    
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "Compare Models"
        }}
    />
    <Hero 
        heroType = 'One'
        heroID = 'Two'
        heroBgColor="black"
        heroContentColor="white"
        contentColor ="white"
        model= "ModelS"
        heroImageName={ModelXHero3}
        heroSizes={{width: '100%', height: '80vh'}}
        content={
            {
                header: {
                    title: 'Exterior',
                    para: 'Designed for Efficiency'

                },
                description: "Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.",
                
            }
        }
        cta = {{
            primary: "Order Now",
            secondary: "View Inventory"
        }}
    />
    <GridModel 
        imgFolder="modelX"
        imgURL={{image1: "ModelXExterior", image2: "ModelXExterior2", image3: "ModelXExterior3"}} 
        content={
            {
                gridOne: {
                    title: "Relentless Performance", 
                    para: "Performance wheels and tires keep the SUV planted, transferring even more power down to the road."
                },
                gridTwo: {
                    title: "Optimized Aerodynamics",
                    para: "Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth."
                },
                gridThree: {
                    title: "Refined Styling",
                    para: "Exterior design combines an iconic look with elegant details."
                }
            }
        }
        id="Two"
    />
    <Hero 
        heroType="Two"
        heroID = 'Four'
        heroName="Range"
        heroBgColor="white"
        heroContentColor="white"
        contentColor="var(--color-primary)"
        model= "ModelX"
        heroImageName={ModelXHero4}
        heroSizes={{width: '100%', height: '80vh'}}
        heroContent={
            {
                perkOne: {
                    title: '348 mi',
                    details: 'Range (EPA est.)'
                },
                perkTwo: {
                    title: '15 min',
                    details: 'Recharge up to 175 mi'
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
                descriptionStart: "With up to 348 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. ",
                calltoAction: {
                    ctaOne: "Chat with a Tesla Advisor",
                    ctaTwo: "schedule a demo drive"
                },
                descriptionBetween: " to learn more about Model X ",
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
        heroID = 'Three'
        heroName="Safety"
        heroBgColor="white"
        model="ModelX"
        pointsforHeroNaked={{one: "Very Low Rollover Risk", two: "Front-Impact Protection"}}
        heroImageName={ModelXSafety}
        heroSizes={{width: '100%', height: '400px'}}
        content={
            {
                header: {
                    title: 'Safety',
                    para: 'Built for Safety'
                },
                description: "Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
                
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
                descriptionBetween: " to learn more about Model X ",
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
        modelName = "Model X"
        bgColor = "black"
        fontColor = "white"
        imgFolder="modelX"
        img="ModelXSpecs.jpeg"
        specsCta = {{
            ctaOne: {
                title: "Model X Plaid",
                perks: {
                    perkOne:{
                        title: "Range (EPA est.)",
                        details: "333 mi"
                    },
                    perkTwo:{
                        title: "*Acceleration",
                        details: "2.5 s 0-60 mph",
                        asterix: "with rollout subtracted"
                    },
                    perkThree: {
                        title: "1/4 Mile",
                        details: "9.9 s"
                    },
                    perkFour: {
                        title: "Top Speed",
                        details: "163 mph",
                    },
                    perkFive: {
                        title: "Peak Power",
                        details: "1,020 hp"
                    },
                    perkSix: {
                        title: "Drag Coeeficient",
                        details: "0.24 Cd"
                    },
                    perkSeven: {
                        title: "*Wheels",
                        details: "20\" or 22\"",
                    },
                    perkEight: {
                        title: "Weight",
                        details: "5,390 lbs",
                    },
                    perkNine: {
                        title: "Towing",
                        details: "5,000 lbs"
                    },
                    perkTen: {
                        title: "Powertrain",
                        details: "Tri Motor"
                    },
                    perkEleven: {
                        title: "Seating",
                        details: "Up to 6"
                    },
                    perkTwelve: {
                        title: "Supercharging",
                        details: "250 kW"
                    }  
                }
            },
            ctaTwo: {
                title: "Model X",
                perks: {
                    perkOne:{
                        title: "Range (EPA est.)",
                        details: "348 mi"
                    },
                    perkTwo:{
                        title: "Acceleration",
                        details: "3.8 s 0-60 mph"
                    },
                    perkThree: {
                        title: "Peak Power",
                        details: "670 hp"
                    },
                    perkFour: {
                        title: "Top Speed",
                        details: "155 mph"
                    },
                    perkFive: {
                        title: "Wheels",
                        details: "20\" or 22\""
                    },
                    perkSix: {
                        title: "Drag Coefficient",
                        details: "0.24 Cd",
                    },
                    perkSeven: {
                        title: "Towing",
                        details: "5,000 lbs",
                    },
                    perkEight: {
                        title: "Weight",
                        details: "5,185 lbs"
                    },
                    perkNine: {
                        title: "Seating",
                        details: "Up to 7"
                    },
                    perkTen: {
                        title: "Powertrain",
                        details: "Dual Motor"
                    },
                    perkEleven: {
                        title: "Supercharging",
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
        imgFolder="modelX"
        imageName="ModelXFooter.jpeg"
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