import { FaEllipsisH } from "@react-icons/all-files/fa/FaEllipsisH";

import TitleTask from "./TitleTask";
import DescriptionTask from "./DescriptionTask";
import Sticker from "../tag/Sticker";
import CheckboxElement from "../checkbox/CheckboxElement";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaPen } from "@react-icons/all-files/fa/FaPen";

function Task({ taskTitle, taskDescription
}) {
    return (
        <>
            <section className="bg-[#FFF9DE] m-4 p-2 rounded-lg">
                <div className="flex justify-between px-2 items-center">
                    <TitleTask taskTitle={taskTitle} />
                    <div>
                        {/* TODO: Dropdown menu with state*/}
                        <span className="text-1xl text-stone-400">
                            <FaEllipsisH />
                        </span>
                    </div>
                </div>
                <div className="text-left px-2">
                    <DescriptionTask description={taskDescription} />
                </div>
                <div className="flex justify-between m-2 items-center mt-2">
                    <span className="flex justify-evenly">
                        <Sticker />
                        <Sticker />
                        <Sticker />
                        <Sticker />
                    </span>
                    <div className="flex items-center text-[color:var(--gray)]">
                        <CheckboxElement />
                        <span className="mx-1">
                            <FaTrash />
                        </span>
                        <span className="mx-1">
                            <FaPen />
                        </span>
                    </div>

                </div>
            </section>
        </>
    );
}

Task.defaultProps = {
    taskTitle: 'Task Title',
    taskDescription: 'Maecenas molestie dui justo, sit amet congue felis auctor sagittis. Etiam facilisis semper dapibus. Vivamus commodo purus eget sem tincidunt, vel efficitur felis bibendum. Nulla sed mollis justo. Fusce condimentum libero aliquet libero tincidunt, et euismod quam blandit. Praesent sagittis arcu volutpat posuere fermentum. Nam rutrum sodales purus, id fringilla massa fringilla ac. Quisque dapibus erat ac sollicitudin pulvinar.',
}

export default Task;