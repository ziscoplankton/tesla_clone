import SectionModel from "../components/model/SectionModel"
import Navbar from "../components/home/Navbar"
export default function Model({model,folderIMG, para,rangeTitle,rangeDetails,speedTitle,speedDetails,topPerfTitle,topPerfDetails,peakPowerTitle,peakPowerDetails, navBarColor}) {
    return <>
    <div id='blur'></div>
    <Navbar color={navBarColor}/>
        <SectionModel 
            model={model}
            folderIMG={folderIMG} 
            para={para}
            rangeTitle={rangeTitle}
            rangeDetails={rangeDetails}
            speedTitle={speedTitle} 
            speedDetails={speedDetails} 
            topPerfTitle={topPerfTitle} 
            topPerfDetails={topPerfDetails} 
            peakPowerTitle={peakPowerTitle} 
            peakPowerDetails={peakPowerDetails} 
            navBarColor={navBarColor}
        />
    </>
}
