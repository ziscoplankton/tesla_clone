
import { useRef, useState } from "react"
import Navbar from "./components/home/Navbar"
import './css/account/account.css'
export default function Account(){

    const [inputHasContent, setInputHasContent] = useState(false)

    const handleInput = () => {
        console.log(nextBtnRef.current)
    }
    return <>
        <div id="blur"></div>
        <Navbar color="black" />
        <div id="Account">
            <div id="AccountForm">
                <div id="AccountFormTitle">Sign In</div>
                <label for="AccountFormEmail">
                    Email
                    <input onChange={(event) => setInputHasContent(event.target.value !== '')} type="text" id="AccountFormEmail" />
                </label>
                <button id="AccountFormNextBtn" className={inputHasContent ? 'has-content' : ''} >Next</button>
                <div id="AccountFormTroubleSignin">Trouble Signing In?</div>
                <div id="AccountFormOrDiv"><span id="lineAccountForm"></span>Or<span id="lineAccountFormTwo"></span></div>
                <button id="AccountFormCreateBtn">Create Account</button>
            </div>
            <div id="AccountFormFooter">
                <ul>
                    <li>Tesla © 2023</li>
                    <li>Privacy & Legal</li>
                    <li>Locations</li>
                    <li>Recalls</li>
                </ul>
             </div>
        </div>

    </>
}