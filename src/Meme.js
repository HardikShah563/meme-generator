import React from 'react';
// import memesData from './memesdata'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
        bottomText: "",
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("http://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, []);

    // console.log(allMemes)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    const [formData, setFormData] = React.useState({
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
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <div className="flex">
                    <input
                        className="form--input"
                        placeholder="Top Text"
                        type="text"
                        name="topText"
                        value={formData.topText}
                        onChange={handleChange}
                    />

                    <input
                        className="form--input"
                        placeholder="Bottom Text"
                        type="text"
                        name="bottomText"
                        value={formData.bottomText}
                        onChange={handleChange}
                    />
                </div>

                <button
                    className="fomt--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>

                <div className="meme">
                    <img
                        className="meme--image"
                        src={meme.randomImage}
                        alt="Meme Image"
                    />

                    <h2 className="meme--text top">
                        {formData.topText}
                    </h2>

                    <h2 className="meme--text bottom">
                        {formData.bottomText}
                    </h2>
                </div>
            </form>

            <footer>
                Developed with Love by <a href="https://www.hellohardik.xyz">Hello Hardik</a>
            </footer>
        </main>
    )
}

// const arr = [1, 5, 10, 15];
//   console.log(arr.fill(0, 0, 4));

// https://official-joke-api.appspot.com/random_joke
// Jokes API - hundreds of jokes, returns a json file