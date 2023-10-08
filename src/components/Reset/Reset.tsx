
import Answer_module from '../Answer/Answer.module.scss';
import App_module from '../../App.module.scss';
import Classnames from 'classnames';
import Reset_module from './Reset.module.scss'; type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void
}

const Reset = (props: Props) => {
    return (
        <div  className={Reset_module['reset']}>
            <h1 className={Reset_module['reset-text']}>You scored: {(props.correctQuestions / props.totalQuestions) * 100}%</h1>
            <button onClick={props.onPress} className={Classnames(Answer_module.answer, App_module['next-btn'], Reset_module['reset-btn'])}>Press To Try Again!</button>
        </div>
    )
}

export default Reset