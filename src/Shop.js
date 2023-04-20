
import ShopHero from './components/shop/ShopHero'
import Navbar from './components/home/Navbar.js'
import BestSellers from './components/shop/BestSellers'
import ShopGrid from './components/shop/ShopGrid'

import ChillBanner from './css/shop/images/ChillBanner.jpeg'
import FloorMatsBanner from './css/shop/images/FloorMatsBanner.jpeg'
import WallConnectBanner from './css/shop/images/WallConnectBanner.jpeg'

import ModelSBanner from './css/shop/images/ModelS.jpeg'
import Model3Banner from './css/shop/images/Model3.jpeg'
import ModelXBanner from './css/shop/images/ModelX.jpeg'
import ModelYBanner from './css/shop/images/ModelY.jpeg'
import ChargingBanner from './css/shop/images/Charging.jpeg'

import MenApparel from './css/shop/images/Men.jpeg'
import WomenApparel from './css/shop/images/Women.jpeg'
import KidsApparel from './css/shop/images/Kids.jpeg'
import LifeStyle from './css/shop/images/Lifestyle.jpeg'

export default function Shop(){

    return <>
        <div id='blur'></div>
        <Navbar color="white" />
        <ShopHero 
        id="One"
        type="animate"
        model="banner"
        images={{
            one: {
                url: WallConnectBanner,
                title: "Wall Connector",
                details: "The most convenient way to charge at home"
            },
            two: {
                url: ChillBanner,
                title: "Chill Collection",
                details: "Premium comfort for any season"
            },
            three: {
                url: FloorMatsBanner,
                title: "Model Y All-Weather Interior Liners",
                details: "For maximum protection and durability"
            }
        }}
        
        />
        <BestSellers />
        <ShopHero 
        id="One"
        type="fixed"
        model="ModelS"
        image={{url: ModelSBanner, title: "Model S Accessories", details: ""}}
        />
        <ShopHero 
            id="One"
            type="fixed"
            model="Model3"
            image={{url: Model3Banner, title: "Model 3 Accessories", details: ""}}
        />
        <ShopHero 
            id="One"
            type="fixed"
            model="ModelX"
            image={{url: ModelXBanner, title: "Model X Accessories", details: ""}}
        />
        <ShopHero 
            id="One"
            type="fixed"
            model="ModelY"
            image={{url: ModelYBanner, title: "Model Y Accessories", details: ""}}
        />
        <ShopHero 
            id="One"
            type="fixed"
            model="Charging"
            image={{url: ChargingBanner, title: "Charging", details: ""}}
        />
        <ShopGrid 
        images={{
            imageOne: {
                url: MenApparel,
                type:"Men",
                title:"Men's Apparel"
            },
            imageTwo: {
                url: WomenApparel,
                type: "Women",
                title: "Women's Apparel"
            },
            imageThree: {
                url: KidsApparel,
                type: "Kid",
                title: "Kids's Apparel"            
            }
        }}
        />
        <ShopHero 
            id="One"
            type="fixed"
            model="Lifestyle"
            image={{url: LifeStyle, title: "Lifestyle", details: ""}}
        />
        <div id="ShopHeroFooter">
            <ul>
                <li>Tesla © 2023</li>
                <li>Privacy & Legal</li>
                <li>Locations</li>
                <li>Recalls</li>
            </ul>
        </div>
    </>
}