import { render } from '@testing-library/react';
import { EmptyTask } from '../../components/EmptyTask';

describe('Empty Task Test', () => {
  it('Should be able to render correctly', () => {
    const { getByAltText, getByText } = render(<EmptyTask />);
    expect(getByAltText('Sem tarefas')).toBeInTheDocument();
    expect(
      getByText('Você ainda não tem tarefas cadastradas'),
    ).toBeInTheDocument();
    expect(
      getByText('Crie tarefas e organize seus itens a fazer'),
    ).toBeInTheDocument();
  });
});
