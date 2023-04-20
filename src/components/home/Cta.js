import '../../css/home/cta.css'

export default function Cta({cta, type}) {
    return <>
        <button className={`btn btn--${type}`}>{cta}</button>
    </>
}