import { render, screen } from '@testing-library/react';
import Home from '@components/Home';

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />);
  });
});
