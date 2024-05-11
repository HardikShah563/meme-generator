// importing from react
import { useEffect, useState } from "react";
// importing components
import MemeForm from "./MemeForm";
import MemeImage from "./MemeImage";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
        bottomText: "",
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("http://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    const [formData, setFormData] = useState({
        topText: "",
        bottomText: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("form submit");
    }

    return (
        <>
            <MemeForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                getMemeImage={getMemeImage}
            />

            <MemeImage
                meme={meme}
                formData={formData}
            />
        </>
    );
};
