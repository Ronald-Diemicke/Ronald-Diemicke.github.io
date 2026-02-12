import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Loki/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Card with optional title and slotted body content.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card header title',
    },
  },
};
export default meta;

type Story = StoryObj;

const createCard = (args: { title?: string; body?: string }) => {
  const { title = '', body = 'Card body content.' } = args;
  const titleAttr = title ? ` title="${title.replace(/"/g, '&quot;')}"` : '';
  return `<loki-card${titleAttr}>${body}</loki-card>`;
};

export const Default: Story = {
  args: { body: 'Card body content. Use the title attribute for the header and slot for the body.' },
  render: (args) => createCard(args),
};

export const WithTitle: Story = {
  args: { title: 'Card title', body: 'Card body content. Use the <code>title</code> attribute for the header and slot for the body.' },
  render: (args) => createCard(args),
};

export const NoTitle: Story = {
  args: { body: 'Card without a header.' },
  render: (args) => createCard(args),
};
