import type { Meta, StoryObj } from '@storybook/react';

import NavLink from 'src/components/NavLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/NavLink',
  component: NavLink,
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
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const WithString: Story = {
  args: {
    children: 'Fitur',
  },
};

export const WithJsx: Story = {
  args: {
    children: <span className="font-bold text-red-300">fitur</span>,
  },
};
