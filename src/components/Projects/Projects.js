import React from "react";
import {homeObjOne, homeObjTwo, homeObjThree, toyProject1, toyProject2} from "./Data";
import InfoSection from "../InfoSection/InfoSection";
import ToyProject from "../InfoSection/ToyProject";
import {StyledContainer} from "../../globalStyles";

const Project = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <ToyProject {...toyProject1} />
            <ToyProject {...toyProject2} />
            {/*<InfoSection {...homeObjFour} />*/}
            {/*<Pricing />*/}
        </>
    );
};

export default Project;
