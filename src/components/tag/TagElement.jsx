function TagElement({color, tagName}) {
    return (
        <>
            <div className="flex items-center">
                <span className={`bg-[${color}] w-4 h-4 rounded-full mx-2`}></span>
                <span className="text-stone-600">{tagName}</span>
            </div>
        </>
    );
}

export default TagElement;