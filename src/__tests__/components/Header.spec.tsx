import { render } from '@testing-library/react';
import { Header } from '../../components/Header';

describe('Header Test', () => {
  it('Should be able to render correctly', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('ToDo')).toBeInTheDocument();
  });
});
