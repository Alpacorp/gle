import { render } from '@testing-library/react';
import { Option } from './index';

describe('Option', () => {
  const children = 'Option 1';
  const className = 'custom-class';
  const value = 'option1';
  const color = 'black';

  it('renders option component correctly', () => {
    const { getByText } = render(
      <Option className={className} value={value} color={color}>
        {children}
      </Option>
    );

    const optionElement = getByText(children) as HTMLOptionElement;
    expect(optionElement).toBeInTheDocument();
    expect(optionElement.value).toBe(value);
    expect(optionElement.className).toContain(className);
    expect(optionElement.className).toContain(`text-${color}`);
  });
});
