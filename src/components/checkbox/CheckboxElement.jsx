
function CheckboxElement(){
    return (
        <>
            <div className="flex">
                <label htmlFor="taskChecked" className="font-bold">done</label>
                <input type="checkbox" name="taskChecked" id="taskChecked" className="mx-2" />
            </div>
        </>
    );
}
export default CheckboxElement;