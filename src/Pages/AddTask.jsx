import { Link } from "react-router-dom";
import { useState } from "react";

import ButtonSubmit from "../components/button/ButtonSubmit";
import TitleBox from "../components/input/TitleBox";
import DescriptionBox from "../components/input/DescriptionBox";
import TitleTask from "../components/task/TitleTask";
import TagElement from "../components/tag/TagElement";

function AddTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [reminder, setReminder] = useState(false);
    const [tags, setTags] = useState([]);
    //TODO: add tag element in todo list

    //Récupére le titre
    const getTitle = (e) => {
        // console.log(e.target.value);
        setTitle(e.target.value)
    }

    //Récupére la description
    const getDescription = (e) => {
        // console.log(e.target.value);
        setDescription(e.target.value)
    }

    //Récupére l'intitulé du tag
    const getTagName = (e) => {
        // console.log(e.target.innerText);
        setTags([...tags, e.target.innerText]);
    }

    //Add task
    const addTask = (task) => {
        console.log(task)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!title){
            alert('Please add a task');
            return
        }

        addTask({title,description, tags})

        setTitle('')
        setDescription('')
        setTags([])
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <nav className="flex justify-between mx-4 my-8 w-[90%]">
                    <Link to="/dashboard">
                        <span className="text-[color:var(--gray)] hover:underline-offset-8">Cancel</span>
                    </Link>
                    <ButtonSubmit text="Add" />
                </nav>
                <main className="w-[90%] m-4 my-8">
                    <TitleBox placeholder="add a title..." value={title} getTitle={getTitle} />
                    <DescriptionBox placeholder="add a description..." value={description} getDescription={getDescription} />
                </main>
                <aside className="w-[90%] my-8 mx-4">
                    <TitleTask taskTitle="Tag" />
                    <TagElement color="#D2CEFF" tagName="work" getTagName={getTagName} />
                    <TagElement color="#D1E5F7" tagName="study" getTagName={getTagName} />
                    <TagElement color="#FFCECE" tagName="entertainment" getTagName={getTagName} />
                    <TagElement color="#DAF2D6" tagName="family" getTagName={getTagName} />
                </aside>
            </form>
        </>
    )
}

export default AddTask;