import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Greating from "./Greating";

describe('Greating component', () => {
   test('renders Hello World as a text', () => {
      // Arrange
      render(<Greating />)

      // Act

      // ... nothing

      // Assert
      const helloWorldElement = screen.getByText('Hello World', { exact: false });
      expect(helloWorldElement).toBeInTheDocument();
   });

   test('renders good to see you if the button war NOT clicked', () => {
      render(<Greating />)

      const outputElement = screen.getByText('good to see you', { exact: false });
      expect(outputElement).toBeInTheDocument();
   });

   test('renders Changed! if the button WAS clicked', () => {
      render(<Greating />)

      // Act
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);

      // Assert

      const outputElement = screen.getByText('Changed!');
      expect(outputElement).toBeInTheDocument();
   });

   test('does not render good to see you if the button clicked', () => {

      render(<Greating />);

      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);

      const outputElement = screen.queryByTestId('good see you', { exact: false });
      expect(outputElement).toBeNull();
   })
});

