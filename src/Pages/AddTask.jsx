import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import TitleBox from "../components/input/TitleBox";
import DescriptionBox from "../components/input/DescriptionBox";
import TitleTask from "../components/task/TitleTask";
import TagElement from "../components/tag/TagElement";

function AddTask(){
    return(
        <>
            <nav className="flex justify-between mx-4 my-8 w-[90%]">
                <Link to="/dashboard">
                    <span className="text-[color:var(--gray)]">Cancel</span>
                </Link>
                <Button text="Add"/>
            </nav>
            <main className="w-[90%] m-4 my-8">
                <TitleBox placeholder="add a title..."/>
                <DescriptionBox placeholder="add a description..."/>
            </main>
            <aside className="w-[90%] my-8 mx-4">
                <TitleTask taskTitle="Tag"/>
                <TagElement color="#D2CEFF" tagName="work"/>
                <TagElement color="#D1E5F7" tagName="study"/>
                <TagElement color="#FFCECE" tagName="entertainment"/>
                <TagElement color="#DAF2D6" tagName="family"/>
            </aside>
        </>
    )
}

export default AddTask;