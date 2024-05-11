export default function MemeImage(props) {
    return (
        <>
            <div className="meme">
                <img
                    className="meme--image"
                    src={props.meme.randomImage}
                    alt="Meme Image"
                />

                <h2 className="meme--text top">
                    {props.formData.topText}
                </h2>

                <h2 className="meme--text bottom">
                    {props.formData.bottomText}
                </h2>
            </div>
        </>
    );
};
