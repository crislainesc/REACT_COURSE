import { render, screen } from "@testing-library/react";
import Greating from "./Greating";

test('renders Hello World as a text', () => {
   // Arrange
   render(<Greating />)

   // Act

   // ... nothing

   // Assert
   const helloWordlElement = screen.getByText('Hello World', { exact: false });
   expect(helloWordlElement).toBeInTheDocument();
});