import React, { useState } from "react";
import { Foudase } from "../style/input";

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
            <div>Carregando...</div>

        )
    }


    return (
        <div class="Main">
            <div class="Title">MineFind</div>
            <Foudase>

                <input placeholder="Nickname.." onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => fetchData()}>
                   <FaHammer className="hammer-image"/>
                </button>
            </Foudase>
            <p>{data?.profileName || ""}</p>
            <SKinPreview skinUrl={data?.textures.SKIN.url} />
        </div>
    )
}


export default Home