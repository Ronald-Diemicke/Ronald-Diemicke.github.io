import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Loki/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Text input with optional label. Attributes: label, placeholder, type, name, value.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
      description: 'Input type',
    },
    name: {
      control: 'text',
      description: 'Input name',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
};
export default meta;

type Story = StoryObj;

const createInput = (args: {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
}) => {
  const {
    label = '',
    placeholder = '',
    type = 'text',
    name = '',
    value = '',
  } = args;
  const attrs = [
    label ? `label="${label.replace(/"/g, '&quot;')}"` : '',
    placeholder ? `placeholder="${placeholder.replace(/"/g, '&quot;')}"` : '',
    `type="${type}"`,
    name ? `name="${name.replace(/"/g, '&quot;')}"` : '',
    value ? `value="${value.replace(/"/g, '&quot;')}"` : '',
  ]
    .filter(Boolean)
    .join(' ');
  return `<loki-input ${attrs}></loki-input>`;
};

export const Default: Story = {
  args: {},
  render: (args) => createInput(args),
};

export const WithLabel: Story = {
  args: { label: 'Email', type: 'email', placeholder: 'you@example.com', name: 'email' },
  render: (args) => createInput(args),
};

export const Password: Story = {
  args: { label: 'Password', type: 'password', placeholder: '••••••••', name: 'password' },
  render: (args) => createInput(args),
};
