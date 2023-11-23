import Sticker from "./Sticker";

function TagElement({ color, tagName, getTagName }) {
    //console.log(color);
    return (
        <>
            <div className="flex items-center">
                <span className={`bg-[${color}] w-4 h-4 rounded-full mx-2`}></span>
                <span className="text-stone-600" onClick={getTagName}>{tagName}</span>
            </div>
        </>
    );
}

export default TagElement;