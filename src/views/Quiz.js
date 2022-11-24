import { React, useState } from "react";
import Questions from "../components/Questions";
import Counter from "../components/Counter";

function Quiz({ name }) {
    console.log("ho");
    const [questionNumber, setQuestionNumber] = useState();
    const [timer, setTimer] = useState(30);
    return (
        <>
            <div className="counterContainer">
                <Counter questionNumber={questionNumber} timer={timer} setTimer={setTimer} />
            </div>
            <Questions name={name} setQuestionNumber={setQuestionNumber} setTimer={setTimer} />
        </>
    );
}

export default Quiz;
