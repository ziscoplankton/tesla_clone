import { useRef, useState, useEffect } from 'react'
import '../../css/home/navbar.css'

export default function Navbar(color) {
    const [isSidebarActive, setSidebarActive] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const sideBar = useRef()
    const menuBtn = useRef()
    const menuRef = useRef()

    const navBarRef = useRef()

    const logoRef = useRef()
    
    // Make sidebar Appear
    const handleSidebar = () => {
        setSidebarActive(!isSidebarActive)
    }

    // Animation on side menu
    useEffect(() => {
        const blurDiv = document.getElementById('blur')
        const logo = document.getElementById('logo')
        if (isSidebarActive) {
            sideBar.current.classList.add('active')
            sideBar.current.classList.remove('remove')
            blurDiv.classList.add('active')
            logo.classList.add('blur')
            document.body.style.overflow = 'hidden'
            menuBtn.current.style.display = 'none'
            menuRef.current.classList.add('blur')

        } else {
            if (sideBar.current.classList.contains('active')) {
                sideBar.current.classList.add('remove')
            }
            //sideBar.current.classList.remove('active')
            //sideBar.current.classList.add('remove')
            blurDiv.classList.remove('active')
            logo.classList.remove('blur')
            document.body.style.overflow = 'auto'
            menuBtn.current.style.display = 'block'
            menuRef.current.classList.remove('blur')
        }
    }, [isSidebarActive])


    // Make sidemenu disapear on window click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sideBar.current && !sideBar.current.contains(event.target) && isSidebarActive) {
                setSidebarActive(false);
            }
        };

        document.querySelector('#navbar').addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [isSidebarActive]);


    // Handle Screen Size for blur element width
    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Sidebar elements to display
    const elemsToGet = [
        'Existing Inventory',
        'Trade-In',
        'Demo Drive',
        'Insurance',
        'Cybertruck',
        'Roadster',
        'Semi',
        'Charging',
        'Commercial Energy',
        'Utilities',
        'Support',
        'Investor Relations',
    ]

    const elemsDefault = [
        'Model S',
        'Model 3',
        'Model X',
        'Model Y',
        'Solar Roof',
        'Solar Panels',
        'Power wall',
        'Existing Inventory',
        'Used Inventory',
        'Trade-In',
        'Demo Drive',
        'Insurance',
        'Commercial Energy',
        'Utilities',
        'Charging',
        'Find Us',
        'Support',
        'Investor Relations',
        'Shop',
        'Account',
        'More'
    ]

    // Change menu items on screen size and add href
    useEffect(() => {
        const elems = document.querySelectorAll('.navItemToChange')
        if (screenWidth >= 700) {
            elems.forEach((elem, index) => {
                if (elem.textContent != elemsToGet[index] && elemsToGet[index]){
                    elem.textContent = elemsToGet[index]
                    const hrefName = elemsToGet[index].replace(/\s+/g, '')
                    elem.setAttribute('href', hrefName)
                }

                if (elem.textContent === '' && elemsDefault[index]){
                    elem.textContent = elemsDefault[index]
                    const hrefName = elemsDefault[index].replace(/\s+/g, '')
                    elem.setAttribute('href',hrefName)

                }

                const btnPrimary = document.querySelector('.btn--primary')
                const btnSecondary = document.querySelector('.btn--secondary')
                if (btnPrimary && btnSecondary) {
                    btnPrimary.classList.add('sideAnim')
                    btnSecondary.classList.add('sideAnim')
                }
            })
        }
        else {
            elems.forEach((elem, index) => {
                elem.textContent = elemsDefault[index]
                const hrefName = elemsDefault[index].replace(/\s+/g,'')
                elem.setAttribute('href', hrefName)
            })
        }
        document.getElementById('blur').style.width = window.innerWidth

    }, [screenWidth])

    // Set Color Navbar to all Models aka paths
    if (color) {
        useEffect(() => {
            navBarRef.current.style.color = color.color
        }, [])
    }

    return <>
        <nav ref={navBarRef} id='navbar'>
            <div className='navbar--container'>
                <div ref={logoRef} id="logo">
                    <a href="/"><svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
                    </svg></a>
                </div>
                <ol ref={menuRef} className='navbar--menu'>
                    <a href="models">Model S</a>
                    <a href="model3">Model 3</a>
                    <a href="modelx">Model X</a>
                    <a href="modely">Model Y</a>
                    <a href="SolarRoof">Solar Roof</a>
                    <a href="SolarPanels">Solar Panels</a>
                    <a href="Powerwall">Power Wall</a>
                    <div className="hover"></div>
                </ol>
                <ol className='navbar--right'>
                    <li><a href="shop">Shop</a></li>
                    <li><a href="account">Account</a></li>
                    <li ref={menuBtn} id='sidebar--btn' onClick={handleSidebar}>Menu</li>
                    <div className='hover2'></div>
                </ol>
                <ol ref={sideBar} className='navbar--sidebar'>
                    <div id="closeSidebarDiv">
                        <svg onClick={handleSidebar} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </div>
                    {elemsDefault.map((elem, index) => {
                        const elemName = elem.replace(/\s+/g, '')
                        return <li key={index}><a href="" className="navItemToChange"></a></li>
                    })}
                    <li>
                        <a href="">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                </svg>
                                United States
                                <div><small>English</small></div>
                            </div>
                        </a>
                    </li>
                </ol>
            </div>
        </nav>
    </>
}