import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';

const meta = {
  title: 'UI Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible modal component with accessibility features and keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    title: {
      control: 'text',
      description: 'The title text for the modal',
    },
    description: {
      control: 'text',
      description: 'The description text for the modal',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'The size of the modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether clicking the overlay closes the modal',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing Escape closes the modal',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isOpen: true,
    title: 'Basic Modal',
    description: 'This is a basic modal example',
    children: 'This is the modal content. You can put any React elements here.',
  },
};

export const WithTitleOnly: Story = {
  args: {
    isOpen: true,
    title: 'Modal with Title Only',
    children: 'This modal has only a title and content.',
  },
};

export const WithDescriptionOnly: Story = {
  args: {
    isOpen: true,
    description: 'This modal has only a description',
    children: 'Content without a title.',
  },
};

export const NoHeader: Story = {
  args: {
    isOpen: true,
    children: 'This modal has no header, just content.',
  },
};

export const Small: Story = {
  args: {
    isOpen: true,
    title: 'Small Modal',
    size: 'sm',
    children: 'This is a small modal.',
  },
};

export const Large: Story = {
  args: {
    isOpen: true,
    title: 'Large Modal',
    size: 'lg',
    children: 'This is a large modal with more content space.',
  },
};

export const ExtraLarge: Story = {
  args: {
    isOpen: true,
    title: 'Extra Large Modal',
    size: 'xl',
    children: 'This is an extra large modal.',
  },
};

export const FullScreen: Story = {
  args: {
    isOpen: true,
    title: 'Full Screen Modal',
    size: 'full',
    children: 'This modal takes up the full screen.',
  },
};

export const NoCloseButton: Story = {
  args: {
    isOpen: true,
    title: 'No Close Button',
    showCloseButton: false,
    children: 'This modal has no close button in the header.',
  },
};

export const WithActions: Story = {
  args: {
    isOpen: true,
    title: 'Confirmation Modal',
    description: 'Are you sure you want to proceed?',
    children: (
      <div className="space-y-4">
        <p>This action cannot be undone. Please confirm your choice.</p>
        <div className="flex justify-end space-x-3">
          <Button variant="outline">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    isOpen: false,
    onClose: fn(),
    children: 'Dummy content',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Interactive Modal"
          description="This modal can be opened and closed"
        >
          <div className="space-y-4">
            <p>This is an interactive modal. You can close it by:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Clicking the X button</li>
              <li>Clicking outside the modal</li>
              <li>Pressing the Escape key</li>
            </ul>
            <div className="flex justify-end">
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};