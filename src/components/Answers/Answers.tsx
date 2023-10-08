import { useState, useEffect } from 'react';
import { Question } from '../../types';
import Answer from '../Answer/Answer';
import Answers_module from './Answers.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

const Answers = (props: Props) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const onPress = (idx: number) => {
        setShowAnswer(true);
        props.onSubmit(props.question.correctAnswerIdx === idx);
    };

    useEffect(() => {setShowAnswer(false)},[props.question])

    return (
        <div className={Answers_module.choices}>
            {props.question.choices.map((choice, idx) => {
                let color = '';
                if (showAnswer && props.question.correctAnswerIdx === idx) color = 'green';
                else if (showAnswer) color = 'red';

                return (
                    <Answer
                        key={idx}
                        text={choice}
                        onPress={() => onPress(idx)}
                        color={color}
                        disabled={showAnswer}
                    />
                );
            })}
        </div>
    );
};

export default Answers;
