import { useContext } from "react";
import Questions from "../components/Questions";
import Gameover from "../components/Gameover"


import { QuizContext } from "../context/Context";

function Quiz() {
    const { timer, count, money } = useContext(QuizContext);
    const Winner = () => {
        return (
            <>
                <h1>Millionärs-Quiz erfolgreich abgeschlossen! Sie haben ${money}$ gewonnen`</h1>
            </>
        )
    }

    return (

        <main>
            {timer > 0 && <div className="counterContainerItem">
                <>{timer}</>
            </div>}
            {timer > 0 && <Questions />}
            {timer < 0 && <Gameover />}
            {count > 14 && <Winner />}
        </main>
    )

}

export default Quiz;
