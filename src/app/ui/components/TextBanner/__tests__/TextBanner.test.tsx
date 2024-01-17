import { TextBanner } from '@/src/app/ui/components';
import { render } from '@testing-library/react';

describe('TextBanner', () => {
  const content = {
    id: 1,
    idSubtext: 2,
    textEs: 'Hola mundo',
    textEn: 'Hello world',
    subtextEs: 'Subtexto en español',
    subtextEn: 'Subtext in English',
    url: 'https://example.com',
  };
  const lang = 'es';
  const redWords = ['mundo'];
  const customClass = 'custom-class';
  const type = 'text';

  it('renders text banner correctly', () => {
    const { getByText } = render(
      <TextBanner
        content={content}
        lang={lang}
        redWords={redWords}
        customClass={customClass}
        type={type}
      />
    );

    const textElement = getByText('Hola');
    expect(textElement).toBeInTheDocument();
    expect(textElement).not.toHaveClass('text-red-500');
  });

  it('renders subtext banner correctly', () => {
    const { getByText } = render(
      <TextBanner
        content={content}
        lang={lang}
        redWords={redWords}
        customClass={customClass}
        type="subtext"
      />
    );

    const subtextElement = getByText('Subtexto');
    expect(subtextElement).toBeInTheDocument();
    expect(subtextElement).not.toHaveClass('text-red-500');
  });
});
