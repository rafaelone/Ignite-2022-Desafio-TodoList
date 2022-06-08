import { render, fireEvent } from '@testing-library/react';
import { Task } from '../../components/Task';

const handleChangeTask = jest.fn();
const handleRemoveTask = jest.fn();

describe('Task  Test', () => {
  it('Should be able to render correctly', () => {
    const { getByTestId, getByText } = render(
      <Task
        description="Estudar React"
        done={false}
        id={21321}
        handleChangeTask={handleChangeTask}
        handleRemoveTask={handleRemoveTask}
      />,
    );

    expect(getByTestId('circle')).toBeInTheDocument();
    expect(getByText('Estudar React')).toBeInTheDocument();
  });

  it('Should be able to done a task', () => {
    const { getByTestId, rerender } = render(
      <Task
        description="Estudar NextJs"
        done={false}
        id={21321}
        handleChangeTask={handleChangeTask}
        handleRemoveTask={handleRemoveTask}
      />,
    );

    fireEvent.click(getByTestId('btn-change'));

    rerender(
      <Task
        description="Estudar NextJs"
        done
        id={21321}
        handleChangeTask={handleChangeTask}
        handleRemoveTask={handleRemoveTask}
      />,
    );

    expect(getByTestId('check-circle')).toBeInTheDocument();
  });

  it('Should be able to remove a task', () => {
    const { getByTestId } = render(
      <Task
        description="Estudar NextJs"
        done={false}
        id={21321}
        handleChangeTask={handleChangeTask}
        handleRemoveTask={handleRemoveTask}
      />,
    );

    fireEvent.click(getByTestId('btn-remove'));
  });
});
