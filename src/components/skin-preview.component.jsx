import React from "react";
import ReactSkinview3d from "react-skinview3d";
import Skin from '../assets/skin.png';


export const SKinPreview = (props) => {
    return(
        <ReactSkinview3d
        skinUrl={Skin}
        height="500"
        width="500"
      />
    )
}  
