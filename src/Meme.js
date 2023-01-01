import React from "react";
import './Meme.css';

export default function Meme() {
    return (
        <main>
            <form>
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
                >
                    Get a new meme image
                </button>
            </form>
        </main>
    )
}