import { FaEllipsisH } from "@react-icons/all-files/fa/FaEllipsisH";

import TitleTask from "./TitleTask";
import DescriptionTask from "./DescriptionTask";
import Sticker from "../tag/Sticker";
import CheckboxElement from "../checkbox/CheckboxElement";

function Task({taskTitle, taskDescription
}) {
    return (
        <>
            <section className="bg-[#FFF9DE] m-4 p-2 rounded-lg">
                <div className="flex justify-between px-2 items-center">
                    <TitleTask taskTitle={taskTitle}/>
                    <div>
                        {/* TODO: Dropdown menu with state*/}
                        <span className="text-1xl text-stone-400">
                            <FaEllipsisH />
                        </span>
                    </div>
                </div>
                <div className="text-left px-2">
                    <DescriptionTask description={taskDescription}/>
                </div>
                <div className="flex justify-between m-2 items-center mt-2">
                    <span className="flex justify-evenly">
                        <Sticker />
                        <Sticker />
                        <Sticker />
                        <Sticker />
                    </span>
                    <span>
                        <CheckboxElement/>
                    </span>
                </div>
            </section>
        </>
    );
}

export default Task;