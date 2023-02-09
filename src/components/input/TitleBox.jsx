function TitleBox(){
    return(
        <>
            <div className="flex flex-col items-start w-5/6">
                <label htmlFor="titleTask" className="block text-bold">Title</label>
                <input type="text" name="titleTask" id="titleTask" placeholder="placeholder..." className="w-full bg-gray-100 px-2 rounded-lg"/>
            </div>
        </>
    );
}

export default TitleBox;