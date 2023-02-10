import { FaEllipsisH } from "@react-icons/all-files/fa/FaEllipsisH";

import TitleTask from "./TitleTask";
import DescriptionTask from "./DescriptionTask";
import Sticker from "../tag/Sticker";
import CheckboxElement from "../checkbox/CheckboxElement";

function Task() {
    return (
        <>
            <section className="bg-[#FFF9DE] m-4 p-2 rounded-lg">
                <div className="flex justify-between px-2 items-center">
                    <TitleTask taskTitle="The first title task"/>
                    <div>
                        {/* TODO: Dropdown menu with state*/}
                        <span className="text-1xl text-stone-400">
                            <FaEllipsisH />
                        </span>
                    </div>
                </div>
                <div>
                    <DescriptionTask description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis tortor eget tempor lacinia. Quisque volutpat quam consectetur ex consectetur, id mattis nisl lobortis. Etiam ullamcorper nibh ut dui elementum, non egestas tortor pellentesque. Cras volutpat luctus mattis. Vivamus dictum fringilla mi in sodales. Nam a lacinia lacus, id molestie justo."/>
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