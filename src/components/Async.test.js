import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Component', () => {
   test('renders posts if request succeeds', async () => {
      render(<Async />)

      const listItemElments = await screen.findAllByRole('listitem');

      expect(listItemElments).not.toHaveLength(0);

   })
})