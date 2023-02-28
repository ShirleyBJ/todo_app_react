function ButtonSubmit({text}){
    return(
        <>
            <input type="submit" className="text-white bg-stone-700 py-1 px-8 rounded-lg" value={text}/>
        </>
    );
}
export default  ButtonSubmit;