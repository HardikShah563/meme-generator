export default function MemeForm(props) {
    return (
        <>
            <form className="form" onSubmit={props.handleSubmit}>
                <div className="flex">
                    <input
                        className="form--input"
                        placeholder="Top Text"
                        type="text"
                        name="topText"
                        value={props.formData.topText}
                        onChange={props.handleChange}
                    />

                    <input
                        className="form--input"
                        placeholder="Bottom Text"
                        type="text"
                        name="bottomText"
                        value={props.formData.bottomText}
                        onChange={props.handleChange}
                    />
                </div>

                <button
                    className="fomt--button"
                    onClick={() => {props.getMemeImage()}}
                >
                    Get a new meme image
                </button>
            </form>
        </>
    );
};
