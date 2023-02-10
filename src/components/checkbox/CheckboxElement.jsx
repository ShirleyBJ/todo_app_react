
function CheckboxElement(){
    return (
        <>
        {/* TODO: chage style of element if checkboxes is checked - state*/}
            <div className="flex text-stone-400 items-center">
                <label htmlFor="taskChecked" className="">done</label>
                <input type="checkbox" name="taskChecked" id="taskChecked" className="accent-[#FFF9DE] mx-2 w-4 h-4 border-stone-400 rounded"/>
            </div>
        </>
    );
}
export default CheckboxElement;