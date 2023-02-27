function Sticker({color}){
    return(
        <>
            <div className={`bg-[${color}] w-4 h-4 rounded-full mx-1`}></div>
        </>
    );
}

Sticker.defaultProps = {
    color: '#69665C',
}

export default Sticker;