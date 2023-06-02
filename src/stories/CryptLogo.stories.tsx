import type { Meta, StoryObj } from '@storybook/react';

import CryptLogo from 'src/components/CryptLogo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/CryptLogo',
  component: CryptLogo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CryptLogo>;

export default meta;
type Story = StoryObj<typeof CryptLogo>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const BitcoinLogo: Story = {
  args: {
    url: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
    color: '#F78B1A',
  },
};

export const LinkLogo: Story = {
  args: {
    url: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_LINK.svg',
    color: '#5664F5',
  },
};
