import { render, screen } from '@testing-library/react';
import RatingList from './components/RatingList';

test('Renders Rating', () => {
  render(<RatingList />);
  const linkElement = screen.getByText(/Rating/i);
  expect(linkElement).toBeInTheDocument();
});
