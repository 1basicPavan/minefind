import React from "react";
import ReactSkinview3d from "react-skinview3d";
import { WalkingAnimation } from "skinview3d";


export const SKinPreview = (props) => {
  return (
    <div className="card-skinPreview">
      <ReactSkinview3d
        className="skinPreview"
        {...props}
        height="320"
        width="223"
        onReady={({
          viewer
        }) => {
          viewer.animation = new WalkingAnimation();
        }}
      />
    </div>
  )
}  
