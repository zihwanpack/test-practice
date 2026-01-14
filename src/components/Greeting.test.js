import userEvent from '@testing-library/user-event';
import { Greeting } from './Greeting';
import { render, screen } from '@testing-library/react';
describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... 여기선 없다.
    // Assert
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders 만나서 반가움 as a text if the button was not clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... 여기선 없다.
    // Assert
    const paragraphElement = screen.getByText('만나서 반가움');
    expect(paragraphElement).toBeInTheDocument();
  });
  test('renders 바뀜! as a text if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // Assert
    const paragraphElement = screen.getByText('바뀜!');
    expect(paragraphElement).toBeInTheDocument();
  });
  test('does not render 만나서 반가움 as a text if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // Assert
    const paragraphElement = screen.queryByText('만나서 반가움');
    expect(paragraphElement).toBeNull();
  });
});
