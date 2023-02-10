function TagElement({color, tagName}) {
    return (
        <>
            <div className="flex items-center">
                <span className={`${color} w-4 h-4 rounded-full mx-1`}></span>
                <span className="text-stone-600">{tagName}</span>
            </div>
        </>
    );
}

export default TagElement;