import { expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import PercentageData from '.';

describe('Percentage Data Component', () => {
  test('should be render +1.09%', async () => {
    render(<PercentageData data={1.09} />);
    const element = screen.getByTestId('data');
    expect(element).toHaveTextContent('+1.09 %');
  });
  test('should be render -2.09%', async () => {
    render(<PercentageData data={-2.09} />);
    const element = screen.getByTestId('data');
    expect(element).toHaveTextContent('-2.09 %');
  });
  test('should be green with data 1.09', async () => {
    const { container } = render(<PercentageData data={1.09} />);
    expect(container.firstChild).toHaveClass('text-green-500');
  });
  test('should be red with data 1.09', async () => {
    const { container } = render(<PercentageData data={-1.09} />);
    expect(container.firstChild).toHaveClass('text-red-500');
  });
});
