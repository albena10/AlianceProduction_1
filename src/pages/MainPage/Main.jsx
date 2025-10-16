import React from 'react';
import Sec1 from './Sec1/Sec1';
import Sec2 from './Sec2/sec2'
import Sec3 from "./Sec3/sec3";
import Sec4 from "./Sec4/Sec4";
import Sec5 from "./Sec5/sec5";
import Sec6 from "./Sec6/sec6";
import Sec7 from "./Sec7/sec7";
import Sec8 from "./Sec8/sec8";
const Main = () => {
    return (
        <div className="main-page">
            <Sec1 className = "main-page-sec1" />
            <Sec2 className = "main-page-sec2" />
            <Sec3 className= "main-page-sec3" />
            <Sec4 className= "main-page-sec4" />
            <Sec5 className= "main-page-sec5" />
            <Sec6 className= "main-page-sec6" />
            <Sec7 className= "main-page-sec7" />
            <Sec8 className= "main-page-sec8" />
        </div>
    );
};

export default Main;