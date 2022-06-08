import { render } from '@testing-library/react';
import { TaskCount } from '../../components/TaskCount';

describe('Task Count  Test', () => {
  it('Should be able to render correctly', () => {
    const { getByText } = render(
      <TaskCount createdTasks={10} completedTasks={2} />,
    );

    expect(getByText('Tarefas Criadas')).toBeInTheDocument();
    expect(getByText('Concluídas')).toBeInTheDocument();
  });
});
