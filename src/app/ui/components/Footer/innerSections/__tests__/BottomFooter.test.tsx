import { BottomFooter } from '@/src/app/ui/components/Footer/innerSections';
import { render, screen } from '@testing-library/react';

describe('BottomFooter', () => {
  it('renders correctly', () => {
    render(<BottomFooter lang="es" />);
    expect(
      screen.getByText(/G.L.E. 2024 | Todos los derechos reservados/i)
    ).toBeInTheDocument();
  });

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
