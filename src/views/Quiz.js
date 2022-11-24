import { React } from "react";
import Questions from "../components/Questions";
import Counter from "../components/Counter";

function Quiz() {
    
    return (

        <>
            <div className="counterContainer">
                <Counter />
            </div>
            <Questions />
        </>
    )

}

export default Quiz;
