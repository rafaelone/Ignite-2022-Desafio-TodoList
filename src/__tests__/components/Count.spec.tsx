import { render } from '@testing-library/react';
import { Count } from '../../components/Count';

describe('Count  Test', () => {
  it('Should be able to render correctly', () => {
    const { getByText } = render(
      <Count total={10} text="Tarefas Criadas" color="#fff" />,
    );

    expect(getByText('Tarefas Criadas')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
  });

  it('Should be able to render correctly with total created', () => {
    const { getByText } = render(
      <Count
        total={10}
        text="Tarefas Finalizadas"
        color="purple"
        totalCreated={20}
      />,
    );

    expect(getByText('Tarefas Finalizadas')).toBeInTheDocument();
    expect(getByText('10 de 20')).toBeInTheDocument();
  });
});
