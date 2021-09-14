import React from 'react'
import {homeObjOne, homeObjTwo} from './Data'
import InfoSection from "../InfoSection/InfoSection";

const Project = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            {/*<InfoSection {...homeObjTwo} />*/}
            {/*<InfoSection {...homeObjThree} />*/}
            {/*<Pricing />*/}
            {/*<InfoSection {...homeObjFour} />*/}
        </>
    )
}

export default Project;
