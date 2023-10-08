import { useState } from 'react';
import styles from './App.module.scss';
import questions from './questions.json';
import { Questions } from './types';
import StatBar from './components/StatBar/StatBar';
import QuestionComp from './components/Question/Question';
import Reset from './components/Reset/Reset';
import Answer_module from './components/Answer/Answer.module.scss';
import Classnames from 'classnames';

function App() {
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrentAnswers] = useState(0);
    const [incorrectAnswers, setIncorrentAnswers] = useState(0);
    const [waitingToAdvance, setWaitingToAdvance] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrentAnswers(correctAnswers + 1);
        else setIncorrentAnswers(incorrectAnswers + 1)

        setWaitingToAdvance(true);
    }

    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    }

    const reset = () => {
        setCurrentQuestionIdx(0);
        setCorrentAnswers(0);
        setIncorrentAnswers(0);
        setWaitingToAdvance(false);
    }

    if (currentQuestionIdx >= allQuestions.questions.length) {
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswers}
                onPress={reset}
            />
        )
    }

    return (
        <div className={styles.app}>
            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && <button onClick={advance} className={Classnames(Answer_module.answer, styles['next-btn'])}>Next Question..</button>}
        </div>
    );
}

export default App;
