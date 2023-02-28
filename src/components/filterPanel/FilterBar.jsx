import TagElement from "../tag/TagElement";

function FilterBar(){
    return(
        <>
            <section className="flex w-full justify-around my-8">
                <TagElement color="#D2CEFF" tagName="work"/>
                <TagElement color="#D1E5F7" tagName="study"/>
                <TagElement color="#FFCECE" tagName="entertainement"/>
                <TagElement color="#DAF2D6" tagName="family"/>
            </section>
        </>
    );
}

export default FilterBar;