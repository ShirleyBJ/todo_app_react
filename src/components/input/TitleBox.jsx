function TitleBox({placeholder}){
    return(
        <>
            <div className="flex flex-col items-start w-full">
                <label htmlFor="titleTask" className="block text-lg font-bold my-4 text-[#69665C]">Title</label>
                <input type="text" name="titleTask" id="titleTask" placeholder={placeholder} className="w-full bg-gray-100 px-2 rounded-lg p-2"/>
            </div>
        </>
    );
}

export default TitleBox;