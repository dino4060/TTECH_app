import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Footer from "@/components/uncategory/Footer"

describe("Footer Component", () => {
	test("displays company name", () => {
		render(<Footer />)
		expect(
			screen.getByText(/Công Ty TNHH TTech Việt Nam/i)
		).toBeInTheDocument()
	})

	test("displays tax code", () => {
		render(<Footer />)
		expect(
			screen.getByText(/349873454968/i)
		).toBeInTheDocument()
	})

	test("contains terms and conditions link", () => {
		render(<Footer />)
		const link = screen
			.getByText(/Term & Conditions/i)
			.closest("a")
		expect(link).toHaveAttribute("href", "/terms")
	})

	test("displays address info", () => {
		render(<Footer />)
		const address = screen.getByText(
			/Phòng 901, Cung điện Ánh Sáng/i
		)
		expect(address).toBeInTheDocument()
	})

	test("contains phone number", () => {
		render(<Footer />)
		expect(
			screen.getByText(/\(\+84\) 944552050/i)
		).toBeInTheDocument()
	})
})
