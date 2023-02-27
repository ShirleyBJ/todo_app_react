import Button from "../components/button/Button";
import Task from "../components/task/Task";
import image_home from "../assets/img/all_characters.png";

import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="text-center">

            <div className="h-96 flex flex-col justify-end">
                <h1 className="my-6">
                    <span className="text-[#D1E5F7] text-5xl font-bold">t</span>
                    <span className="text-[#FFCECE] text-5xl font-bold">o</span>
                    <span className="text-[#DAF2D6] text-5xl font-bold">d</span>
                    <span className="text-[#D2CEFF] text-5xl font-bold">o</span>
                </h1>
                <p className="text-[#69665C] font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    elementum ligula vel ligula aliquam, eu condimentum justo placerat.
                </p>
                <div className="my-8">
                    <Link to="/dashboard">
                        <Button text="Get Started" />
                    </Link>
                </div>
            </div>
            <div className="h-80 flex flex-col justify-end m-8">
                <img src={image_home} alt="" />
                <Task taskTitle="Download todo app" taskDescription="The first step for better life" />
            </div>
        </div>
    )
}

export default Home;