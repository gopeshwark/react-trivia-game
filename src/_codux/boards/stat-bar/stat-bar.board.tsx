import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar />,
    isSnippet: true,
});
