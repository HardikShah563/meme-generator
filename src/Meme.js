import React from 'react';
import memesData from './memesdata'
import './Meme.css';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg",
        bottomText:"",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[randomNumber].url);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    return (
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    placeholder="Top Text" 
                    type="text" 
                />
                
                <input 
                    className="form--input" 
                    placeholder="Bottom Text" 
                    type="text" 
                />
                
                <button 
                    className="fomt--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>

                <img 
                    className="meme--image"
                    src={meme.randomImage}
                    alt="Meme Image"
                />
            </div>            
        </main>
    )
}