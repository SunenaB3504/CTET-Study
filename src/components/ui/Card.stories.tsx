import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
  title: 'UI Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with multiple variants and layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text for the card',
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle text for the card',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined', 'filled'],
      description: 'The visual style of the card',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'The padding size for the card content',
    },
    headerAction: {
      control: 'text',
      description: 'Action element to display in the header',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle',
    children: 'This is the card content. It can contain any React elements.',
  },
};

export const WithTitleOnly: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has only a title and content.',
  },
};

export const WithSubtitleOnly: Story = {
  args: {
    subtitle: 'Card subtitle',
    children: 'This card has only a subtitle and content.',
  },
};

export const NoHeader: Story = {
  args: {
    children: 'This card has no header, just content.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    subtitle: 'With more shadow',
    variant: 'elevated',
    children: 'This card has elevated styling with stronger shadow.',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    subtitle: 'With border only',
    variant: 'outlined',
    children: 'This card uses only borders without background shadow.',
  },
};

export const Filled: Story = {
  args: {
    title: 'Filled Card',
    subtitle: 'With background color',
    variant: 'filled',
    children: 'This card has a filled background.',
  },
};

export const SmallPadding: Story = {
  args: {
    title: 'Small Padding',
    padding: 'sm',
    children: 'This card has small padding around the content.',
  },
};

export const LargePadding: Story = {
  args: {
    title: 'Large Padding',
    padding: 'lg',
    children: 'This card has large padding around the content.',
  },
};

export const NoPadding: Story = {
  args: {
    title: 'No Padding',
    padding: 'none',
    children: 'This card has no padding around the content.',
  },
};

export const WithHeaderAction: Story = {
  args: {
    title: 'Card with Action',
    subtitle: 'Header action example',
    headerAction: '⋮',
    children: 'This card has a header action button.',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Dummy content',
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card
        title="Default Card"
        subtitle="Standard styling"
        variant="default"
      >
        <p>Default card with standard shadow and border.</p>
      </Card>

      <Card
        title="Elevated Card"
        subtitle="More shadow"
        variant="elevated"
      >
        <p>Elevated card with stronger shadow effect.</p>
      </Card>

      <Card
        title="Outlined Card"
        subtitle="Border only"
        variant="outlined"
      >
        <p>Outlined card with border but no shadow.</p>
      </Card>

      <Card
        title="Filled Card"
        subtitle="Background color"
        variant="filled"
      >
        <p>Filled card with background color.</p>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};