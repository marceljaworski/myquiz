import { useContext } from "react";
import Questions from "../components/Questions";
import { QuizContext } from "../context/Context";

function Quiz() {
    const { timer } = useContext(QuizContext);
    
    return (

        <>
            <div className="counterContainer">
                <>{timer}</>
            </div>
            <Questions />
        </>
    )

}

export default Quiz;
