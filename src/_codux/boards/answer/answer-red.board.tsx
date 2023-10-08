import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer/Answer';

export default createBoard({
    name: 'AnswerRed',
    Board: () => <Answer text="Timothy" color="Red" disabled={true} />,
    isSnippet: true,
});
