import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

function Header() {
    const addTask = (e) =>{
        console.log(e);
    }
    return (
        <>
            <header className="flex items-end justify-between mt-3 mx-4 text-stone-600 mb-8">
                <h1 className="text-3xl font-semibold">todo</h1>
                <div className="text-2xl">
                    <FaPlus onClick={(e) => addTask(e)}/>
                </div>
            </header>
        </>
    );
}

export default Header;