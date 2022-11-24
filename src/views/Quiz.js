import { React, useState } from "react";
import Questions from "../components/Questions";
import Counter from "../components/Counter";

function Quiz({ name }) {
    const [questionNumber, setQuestionNumber] = useState(0);
    <>
        <div className="counterContainer">
            <Counter questionNumber={questionNumber} />
        </div>
        <Questions name={name} setQuestionNumber={setQuestionNumber} />
    </>;
}

export default Quiz;
