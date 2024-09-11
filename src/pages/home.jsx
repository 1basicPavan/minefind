import React, { useEffect, useState } from "react";
import input from "../components/input";
import Card from "../components/card";
import { SKinPreview } from "../components/skin-preview.component";
import axios from "axios";

function Home() {
    const [data, setData] = useState();
    const [value, setValue] = useState();

    const fetchData = async () => {
        if(value){
            try{
               await axios.get(`https://api.mojang.com/users/profiles/minecraft/${value}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
               })
                .then((res) => {
                    console.log(res);
                });
            }catch(err){
                console.log(`Error no home.jsx/fetchData`, err);
            }
        }else{
            window.alert("O campo não pode estar vazio");
        }
    }
    
    return (
        <div class="Main">
            <div class="Title">MineFind</div>
            <input className="inputdev" onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => fetchData()}>
                Encontrar
            </button>
            <SKinPreview skinUrl="https://s.namemc.com/2d/skin/face.png?id=8ffa8f74bb88979b&scale=4" />
        </div>
    )
}

export default Home