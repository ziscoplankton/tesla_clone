import { useState, useEffect, useRef } from "react";
import "../../css/shop/shopHero.css";

export default function ShopHero({ id, type,model, images = null, image = null }) {
  const shopHeroIMG = useRef();
  const [currentImage, setCurrentImage] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) =>
  //       prevImage === Object.keys(images).length - 1 ? 0 : prevImage + 1
  //     );
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [images]);

  useEffect(() => {
    if(images){
      Object.entries(images).map((image,index) => {
        if(index === currentImage){
          shopHeroIMG.current.style.backgroundImage = `url(${image[1].url})`;
        }
      })
    }else if (image){
      shopHeroIMG.current.style.backgroundImage = `url(${image.url})`
    }
  },[currentImage])

  const handlePillClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
    <div id={`ShopHero--${type}-${id}`} className={model}>
      {images &&
        Object.entries(images).map((image, index) => {
          if(index == currentImage){
            return <div
            key={`ShopHeroImages--${index}`}
            id={`ShopHeroDisplay`}
            className={`shopHeroDisplay-${index} active`}
            ref={shopHeroIMG}
          >
            <div id="ShopHeroTitle">
              <h1>{image[1].title}</h1>
              <h2>{image[1].details}</h2>
            </div>
            <div id="ShopHeroDetails">
              <div id="ShopHeroCTA">
              <button>Shop now</button>
              </div>
            </div>

            <div id="pillsShopHero">
              {images &&
                Object.values(images).map((image, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        index === currentImage ? "#FFF" : "#5c5e62",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      margin: "0 10px 0 0",
                      cursor: "pointer",
                      transition: "all 300ms ease-in-out",
                    }}
                    onClick={() => handlePillClick(index)}
                  />
                ))}
            </div>
          </div>
          }
          })}
          {image && (
            <div
              key={`ShopHeroImages--${id}`}
              id={`ShopHeroDisplay`}
              className={`shopHeroDisplay-${id} active`}
              ref={shopHeroIMG}
            >
              <div id="ShopHeroTitle">
                <h1>{image.title}</h1>
                <h2>{image.details}</h2>
              </div>
              <div id="ShopHeroDetails">
                <div id="ShopHeroCTA">
                  <button>Shop now</button>
                </div>
              </div>
            </div>
          )}

    </div>
    </>
  );
}
