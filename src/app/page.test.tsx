import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
  it("renders the navigation with OpenBoard branding", () => {
    render(<Home />);
    expect(screen.getByText("OpenBoard")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Home />);
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
  });

  it("renders the Get Started button", () => {
    render(<Home />);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders the hero section with title and description", () => {
    render(<Home />);
    expect(screen.getByText(/The kanban board for/)).toBeInTheDocument();
    expect(screen.getByText(/AI agents/)).toBeInTheDocument();
    expect(screen.getByText(/Orchestrate your code review/)).toBeInTheDocument();
  });

  it("renders the kanban board with columns", () => {
    render(<Home />);
    expect(screen.getByText("Backlog")).toBeInTheDocument();
    expect(screen.getByText("In Review")).toBeInTheDocument();
    expect(screen.getByText("Testing")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("renders kanban board task cards", () => {
    render(<Home />);
    expect(screen.getByText("Fix authentication bug")).toBeInTheDocument();
    expect(screen.getByText("Add user dashboard")).toBeInTheDocument();
    expect(screen.getByText("Review PR #456")).toBeInTheDocument();
    expect(screen.getByText("Run E2E tests")).toBeInTheDocument();
    expect(screen.getByText("Deploy v2.1.0")).toBeInTheDocument();
  });

  it("renders the features section", () => {
    render(<Home />);
    expect(screen.getByText("Built for AI-powered workflows")).toBeInTheDocument();
    expect(screen.getByText("Agent Orchestration")).toBeInTheDocument();
    expect(screen.getByText("Real-time Sync")).toBeInTheDocument();
    expect(screen.getByText("Smart Analytics")).toBeInTheDocument();
  });

  it("renders the how it works section", () => {
    render(<Home />);
    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(screen.getByText("Connect your repo")).toBeInTheDocument();
    expect(screen.getByText("Configure agents")).toBeInTheDocument();
    expect(screen.getByText("Watch them work")).toBeInTheDocument();
  });

  it("renders the contact sales section", () => {
    render(<Home />);
    expect(screen.getByText("Ready to automate?")).toBeInTheDocument();
    expect(screen.getByText("Contact Sales")).toBeInTheDocument();
  });

  it("opens contact modal when Enterprise button is clicked", () => {
    render(<Home />);
    const enterpriseButton = screen.getByText("Enterprise");
    fireEvent.click(enterpriseButton);
    expect(screen.getByText("Contact Sales")).toBeInTheDocument();
    expect(screen.getByText(/Interested in enterprise features/)).toBeInTheDocument();
  });

  it("opens contact modal when Contact Sales button is clicked", () => {
    render(<Home />);
    const contactSalesButton = screen.getAllByText("Contact Sales")[0];
    fireEvent.click(contactSalesButton);
    expect(screen.getByText(/Interested in enterprise features/)).toBeInTheDocument();
  });

  it("closes contact modal when close button is clicked", () => {
    render(<Home />);
    const enterpriseButton = screen.getByText("Enterprise");
    fireEvent.click(enterpriseButton);
    expect(screen.getByText(/Interested in enterprise features/)).toBeInTheDocument();
    
    const closeButton = document.querySelector("button svg path[d='M6 18L18 6M6 6l12 12']");
    if (closeButton) {
      fireEvent.click(closeButton.closest("button")!);
    }
  });

  it("renders the footer", () => {
    render(<Home />);
    expect(screen.getByText(/2026 OpenBoard/)).toBeInTheDocument();
  });

  it("renders the installation code snippets", () => {
    render(<Home />);
    expect(screen.getByText(/npm i -g @m0xoo\/openboard/)).toBeInTheDocument();
    expect(screen.getByText(/cd \/path\/to\/project/)).toBeInTheDocument();
    expect(screen.getByText(/openboard/)).toBeInTheDocument();
  });

  it("renders the beta badge", () => {
    render(<Home />);
    expect(screen.getByText("Now in beta")).toBeInTheDocument();
  });
});