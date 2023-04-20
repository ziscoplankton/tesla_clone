import '../../css/home/section.css'
import Cta from './Cta.js'

export default function Section({className, children, title, para}) {
    
    return <>
        <div id="section" className={className}>
            <div id="header">
                <h1>{title}</h1>
                <p id="para">{para}</p>
            </div>
            <div id="cta">
                {children}
            </div>
        </div>
    </>
}