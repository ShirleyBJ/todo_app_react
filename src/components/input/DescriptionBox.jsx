function DescriptionBox(){
    return(
        <>
            <div className="flex flex-col items-start w-5/6">
                <label htmlFor="titleTask" className="block text-bold">Description</label>
                <textarea name="descriptionTask" id="descriptionTask" placeholder="placeholder..." className="w-full bg-gray-100 px-2 rounded-lg" rows="4">
                </textarea>
            </div>
        </>
    );
}

export default DescriptionBox;