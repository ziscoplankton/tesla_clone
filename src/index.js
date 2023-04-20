import ReactDOM from 'react-dom/client'
import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ErrorPage from './error-page.js'

// Pages
import Home from './Home.js'
import ModelS from './ModelS.js'
import Model3 from './Model3.js'
import ModelX from './ModelX.js'
import ModelY from './ModelY.js'
import SolarRoof from './SolarRoof.js'
import SolarPanel from './SolarPanel.js'
import PowerWall from './PowerWall.js'
import Shop from './Shop.js'
import Account from './Account.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/models" errorElement={<ErrorPage />} element={
                    <>
                        <ModelS />
                    </>
                }/>
                <Route path="/model3" errorElement={<ErrorPage />} element={
                    <>
                        <Model3 />
                    </>
                }/>
                 <Route path="/modelx" errorElement={<ErrorPage />} element={
                    <>
                        <ModelX />
                    </>
                }/>
                 <Route path="/modely" errorElement={<ErrorPage />} element={
                    <>
                        <ModelY />
                    </>
                }/>
                <Route path="/solarroof" errorElement={<ErrorPage />} element={
                    <>
                        <SolarRoof />
                    </>
                }/>
                <Route path="/SolarPanels" errorElement={<ErrorPage />} element={
                    <>
                        <SolarPanel />
                    </>
                }/>
                 <Route path="/Powerwall" errorElement={<ErrorPage />} element={
                    <>
                        <PowerWall />
                    </>
                }/>
                 <Route path="/shop" errorElement={<ErrorPage />} element={
                    <>
                        <Shop />
                    </>
                }/>
                 <Route path="/account" errorElement={<ErrorPage />} element={
                    <>
                        <Account />
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

/*} 




*/