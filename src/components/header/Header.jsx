import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

function Header() {
    return (
        <>
            <header className="flex items-end justify-between mt-3 mx-4 text-stone-600">
                <div className="text-2xl font-semibold">todo</div>
                <div className="text-2xl">
                    <FaPlus/>
                </div>
            </header>
        </>
    );
}

export default Header;