function DescriptionBox({placeholder}){
    return(
        <>
            <div className="flex flex-col items-start w-full">
                <label htmlFor="titleTask" className="block text-lg font-bold my-4 text-[#69665C]">Description</label>
                <textarea name="descriptionTask" id="descriptionTask" placeholder={placeholder} className="w-full bg-gray-100 px-2 rounded-lg p-4" rows="4">
                </textarea>
            </div>
        </>
    );
}

export default DescriptionBox;