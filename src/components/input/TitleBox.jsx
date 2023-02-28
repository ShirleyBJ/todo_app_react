function TitleBox({placeholder,getTitle, value}){
    return(
        <>
            <div className="flex flex-col items-start w-full">
                <label htmlFor="titleTask" className="block text-lg font-bold my-4 text-[#69665C]">Title</label>
                <input type="text" name="titleTask" id="titleTask" className="w-full bg-gray-100 px-2 rounded-lg p-2" placeholder={placeholder} value={value} onChange={getTitle}/>
            </div>
        </>
    );
}

export default TitleBox;