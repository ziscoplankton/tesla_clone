import '../../css/model/modelCta.css'

export default function ModelCta({cta, type}) {
    return <>
        <button className={`modelBtnCta--${type}`}>{cta}</button>
    </>
}