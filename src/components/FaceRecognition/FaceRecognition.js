import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="input_image" alt="" src={imageUrl} width="500px" height="auto" />
                {
                    boxes.map(box => (
                        <div key={box.topRow} className="bounding_box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default FaceRecognition;