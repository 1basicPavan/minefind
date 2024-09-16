import React, { useState } from "react";
import ReactSkinview3d  from "react-skinview3d";
import { WalkingAnimation } from "skinview3d";

function Home() {
    const [value, setValue] = useState('');
    const [skinUrl, setSkinUrl] = useState('');

    const fetchData = () => {
        const url = `https://mineskin.eu/skin/${value}`;
        setSkinUrl(url);
    };

    const downloadSkin = async () => {
        if (!skinUrl) return;

        try {
            const response = await fetch(skinUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${value}-skin.png`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the skin:', error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData();
        }
    };

    return (
        <div className="Main">
            <div className="Title">MineFind</div>
            <input 
                className="inputdev"
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite o nome da skin"
            />
            <button onClick={fetchData}>
                Encontrar
            </button>
            {skinUrl && (
                <>
                    <ReactSkinview3d 
                        skinUrl={skinUrl}
                        height="500"
                        width="500"
                        onReady={({ viewer }) => {
                            viewer.animation = new WalkingAnimation();
                          }}
                    />
                    <button onClick={downloadSkin} className="download-button">
                        Baixar Skin
                    </button>
                </>
            )}
        </div>
    );
}

export default Home;
