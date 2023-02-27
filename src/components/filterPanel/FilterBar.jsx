import TagElement from "../tag/TagElement";

function FilterBar(){
    return(
        <>
            <section className="flex w-full justify-around my-8">
                <TagElement color="bg-[#D2CEFF]" tagName="work"/>
                <TagElement color="bg-[#D1E5F7]" tagName="study"/>
                <TagElement color="bg-[#FFCECE]" tagName="entertainement"/>
                <TagElement color="bg-[#DAF2D6]" tagName="family"/>
            </section>
        </>
    );
}

export default FilterBar;