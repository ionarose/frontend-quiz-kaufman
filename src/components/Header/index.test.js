import { render, screen } from '@testing-library/react';
import Header from "../Header"

it('should render same text passed into title prop', () => {
  render(<Header/>);
  const titleElement = screen.getByText('Quiz-Kaufman');
  expect(titleElement).toBeInTheDocument();
});

it('should contain an h1 element', () => {
    render(<Header title= "My Quiz"/>);
    const headingElement = screen.getByRole('img');
    expect(headingElement).toBeInTheDocument();
  });
