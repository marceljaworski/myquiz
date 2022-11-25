import { useContext } from "react";
import Questions from "../components/Questions";
import Gameover from "../components/Gameover"

import { QuizContext } from "../context/Context";

function Quiz() {
    const { timer } = useContext(QuizContext);
   
    return (

        <>
            {timer < 0 && <Gameover />}
            {timer > 0 && <div className="counterContainer">
                <>{timer}</>
            </div>}
            {timer > 0 && <Questions />}
        </>
    )

}

export default Quiz;
