import React, { useState } from "react";
import { Foudase } from "../style/input";
import { ScaleLoader } from "react-spinners";
import { Render } from "../style/render";

import axios from "axios";
import { SKinPreview } from "../components/skin-preview.component";
import { FaHammer } from "react-icons/fa6";

function Home() {
    const [data, setData] = useState();
    const [value, setValue] = useState();
    const [loading, setLoading] = useState(false);


    const fetchData = async () => {
        if (value) {
            try {
                setLoading(true);
                await axios.get(`/api1/users/profiles/minecraft/${value}`)
                    .then(async (res) => {
                        console.log("type of res: ", typeof (res))
                        await axios.get(`/api2/session/minecraft/profile/${res.data.id}`)
                            .then((resChild) => {
                                setData(JSON.parse(atob(resChild.data.properties[0].value)));
                            })
                        console.log(data)
                    })
            } catch (error) {
                console.log(`Error no home.jsx/fetchData`, error);
            } finally {
                setLoading(false);
            }
        } else {
            window.alert("n pode ta vazio")
        }
    };


    if (loading) {
        return (
            <div className="div-load">

                <ScaleLoader
                color="rgba(255, 255, 255, 1)"
                />

            </div>

        )
    }


    return (
        <div class="Main">
            <div className="titleMain">
                <div class="Title">MineFind</div>
                <Foudase>

                    <input placeholder="Nickname.." onChange={(e) => setValue(e.target.value)} />
                    <button onClick={() => fetchData()}>
                    <FaHammer className="hammer-image"/>
                    </button>
                </Foudase>
            </div>

            <Render>
                
                    <SKinPreview skinUrl={data?.textures.SKIN.url} />
               
                <div className="usuario">
                    <p>Name: {data?.profileName || ""}</p>
                    <p>id: {data?.profileId}</p>
                </div>
            </Render>
            <div className="footer">
                <h3>Contato: MineFind@gmail.com</h3>
                <h3>Copyright 2024–2034</h3>
            </div>
        </div>
    )
}

export default Home