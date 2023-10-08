import { Question } from "../../types"
import Answers from "../Answers/Answers";
import Question_module from './Question.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void
}

const QuestionComp = (props: Props) => {
    return (
        <div>
            <h3 className={Question_module.question}>{props.question.question}</h3>
            <Answers question={props.question} onSubmit={props.onSubmit} />
        </div>
    )
}

export default QuestionComp