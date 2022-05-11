import { render, screen } from "@testing-library/react"
import LinkWrapper from "."

describe("<LinkWrapper />", () => {
  it("Should render link and children", () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    // const children = screen.getByText(/anything/i)
    const children = screen.getByRole("link", { name: /anything/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute("href", "/my-link")

    screen.logTestingPlaygroundURL()
  })
})