import React from "react";

function Footer(){  

    const d=new Date().getFullYear();

    return(
        <div className="footer">
            <p className="dateDisplay"> Copyright @ {d} </p>
        </div>
    );

}

export default Footer;