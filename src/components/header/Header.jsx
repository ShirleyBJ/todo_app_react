import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="flex items-end justify-between mt-3 mx-4 text-stone-600 mb-8">
                <h1 className="text-3xl font-semibold">todo</h1>
                <div className="text-2xl">
                    <Link to="/addTask">
                        <FaPlus/>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;