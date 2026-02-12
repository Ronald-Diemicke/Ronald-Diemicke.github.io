import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Loki/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Button component. Use the `label` attribute or text content for the label, `variant` for style, and `disabled` to disable.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'Button style variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    label: {
      control: 'text',
      description: 'Button label (text content)',
    },
  },
};
export default meta;

type Story = StoryObj;

const createButton = (args: { label?: string; variant?: string; disabled?: boolean }) => {
  const { label = 'Button', variant = 'default', disabled = false } = args;
  const variantAttr = variant !== 'default' ? ` variant="${variant}"` : '';
  const disabledAttr = disabled ? ' disabled' : '';
  const labelAttr = ` label="${String(label).replace(/"/g, '&quot;')}"`;
  return `<loki-button${variantAttr}${disabledAttr}${labelAttr}></loki-button>`;
};

export const Default: Story = {
  args: { label: 'Default' },
  render: (args) => createButton(args),
};

export const Primary: Story = {
  args: { label: 'Primary', variant: 'primary' },
  render: (args) => createButton(args),
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
  render: (args) => createButton(args),
};
