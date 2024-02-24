import { render, screen } from '@testing-library/react';
import { ButtonBack } from '@/src/app/ui/components/ButtonBack';

describe('ButtonBack', () => {
  const lang = 'es';
  const text = 'Go Back';
  const target = '_blank';

  it('renders button with correct href and target', () => {
    render(<ButtonBack lang={lang} text={text} target={target} />);

    const button = screen.getByRole('link');
    expect(button).toHaveAttribute('href', lang === 'es' ? '/es' : '/en');
    expect(button).toHaveAttribute('target', target);
  });

  it('renders button with correct text', () => {
    render(<ButtonBack lang={lang} text={text} target={target} />);

    const buttonText = screen.getByText(text);
    expect(buttonText).toBeInTheDocument();
  });

  it('renders button with correct styles', () => {
    render(<ButtonBack lang={lang} text={text} target={target} />);

    const button = screen.getByRole('link');
    expect(button).toHaveClass(
      'flex border-2 bg-white border-secondary-gray rounded-lg px-10 py-2 my-5 text-main-red hover:bg-light-gray-second hover:text-black transition duration-300 ease-in-out'
    );
  });
});
