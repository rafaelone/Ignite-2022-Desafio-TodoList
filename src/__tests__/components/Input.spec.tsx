import { render } from '@testing-library/react';
import { Input } from '../../components/Input';

describe('Input Test', () => {
  it('Should be able to render correctly', () => {
    const { getByPlaceholderText } = render(
      <Input name="task" placeholder="Nova Tarefa" />,
    );
    expect(getByPlaceholderText('Nova Tarefa')).toBeInTheDocument();
  });
});
