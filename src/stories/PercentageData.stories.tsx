import type { Meta, StoryObj } from '@storybook/react';

import PercentageData from 'src/components/PercentageData';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/PercentageData',
  component: PercentageData,
  decorators: [
    (Story) => (
      <div className="px-10">
        <Story />
      </div>
    ),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PercentageData>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const PlusPercentage: Story = {
  args: {
    data: -10,
  },
};

export const MinusPercentage: Story = {
  args: {
    data: 10.2,
  },
};
