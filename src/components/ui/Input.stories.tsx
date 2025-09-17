import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Input } from './Input';

const meta = {
  title: 'UI Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with labels, validation, and icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width',
    },
    type: {
      control: 'text',
      description: 'The input type (text, password, email, etc.)',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Input',
    placeholder: 'Enter some text...',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Input with Value',
    placeholder: 'Enter some text...',
    value: 'Sample text',
  },
};

export const WithError: Story = {
  args: {
    label: 'Input with Error',
    placeholder: 'Enter some text...',
    error: 'This field is required',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Input with Helper Text',
    placeholder: 'Enter your email',
    helperText: 'We\'ll never share your email with anyone',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Disabled value',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startIcon: '🔍',
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    endIcon: '✕',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Normal State"
        placeholder="Normal input"
      />
      <Input
        label="With Value"
        placeholder="Input with value"
        value="Sample value"
      />
      <Input
        label="With Error"
        placeholder="Input with error"
        error="This field has an error"
      />
      <Input
        label="With Helper Text"
        placeholder="Input with helper text"
        helperText="This is helpful information"
      />
      <Input
        label="Disabled"
        placeholder="Disabled input"
        disabled
        value="Disabled value"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};