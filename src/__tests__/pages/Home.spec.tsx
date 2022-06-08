import { render, fireEvent, act } from '@testing-library/react';

import { Home } from '../../pages/Home';

describe('Home Test', () => {
  it('Should be able to render correctly', () => {
    const { getByText, getByPlaceholderText, getByAltText } = render(<Home />);

    expect(getByAltText('ToDo')).toBeInTheDocument();
    expect(
      getByPlaceholderText('Adicione uma nova tarefa'),
    ).toBeInTheDocument();
    expect(getByAltText('Sem tarefas')).toBeInTheDocument();
    expect(
      getByText('Você ainda não tem tarefas cadastradas'),
    ).toBeInTheDocument();
    expect(
      getByText('Crie tarefas e organize seus itens a fazer'),
    ).toBeInTheDocument();
  });

  it('Should be able to create an new task', () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<Home />);

    fireEvent.change(getByPlaceholderText('Adicione uma nova tarefa'), {
      target: { value: 'Estudar React' },
    });

    fireEvent.click(getByTestId('newTask'));

    act(() => {
      expect(getByText('Estudar React')).toBeInTheDocument();
    });
  });

  it('Should be able to done task', () => {
    const { getByTestId, getAllByTestId, getByPlaceholderText, getByText } =
      render(<Home />);

    fireEvent.change(getByPlaceholderText('Adicione uma nova tarefa'), {
      target: { value: 'Estudar NextJs' },
    });

    fireEvent.click(getByTestId('newTask'));

    act(() => {
      expect(getByText('Estudar NextJs')).toBeInTheDocument();
      expect(getAllByTestId('btn-change')[1]).toBeInTheDocument();
    });

    fireEvent.click(getAllByTestId('btn-change')[1]);

    act(() => {
      expect(getAllByTestId('check-circle')[0]).toBeInTheDocument();
    });
  });

  it('Should be able to remove task', () => {
    const { getByTestId, getAllByTestId, getByPlaceholderText, getByText } =
      render(<Home />);

    fireEvent.change(getByPlaceholderText('Adicione uma nova tarefa'), {
      target: { value: 'Estudar AWS' },
    });

    fireEvent.click(getByTestId('newTask'));

    act(() => {
      expect(getByText('Estudar AWS')).toBeInTheDocument();
      expect(getAllByTestId('btn-remove')[2]).toBeInTheDocument();
    });

    fireEvent.click(getAllByTestId('btn-remove')[2]);

    act(() => {
      expect(getAllByTestId('btn-remove')).toHaveLength(2);
    });
  });
});
