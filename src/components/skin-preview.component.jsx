import React from "react";
import ReactSkinview3d from "react-skinview3d";


export const SKinPreview = (props) => {
    return(
        <ReactSkinview3d
        {...props}
        height="500"
        width="500"
      />
    )
}  
