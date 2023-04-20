import { useEffect } from "react"

import '../../css/shop/shopGrid.css'

export default function ShopGrid({images}){

    useEffect(() => {

        Object.values(images).map((image, index) => {
            const {url, type} = image
            const shopDisplayImgDiv = document.querySelector(`#ShopGrid--${type}`)
            shopDisplayImgDiv.style.setProperty('--shopGridBg', `url(${url})`)

        })
    }, [])

    return <div id="ShopGrid">
        {Object.values(images).map((image, index) => (
            <div id={`ShopGrid--${image.type}`} key={`ShopGrid--${image.type}`}>
                <div id="ShopGridTitle">{image.title}</div>
                <div id="ShopGridBtn">
                        <button>Shop Now</button>
                </div>
            </div>
        ))}
    </div>
}