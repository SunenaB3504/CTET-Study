import React, { useState } from 'react';
import { Button, Input, Card, Modal } from './ui';

const ComponentDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert('Button clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            CTET Study App - UI Components Demo
          </h1>
          <p className="text-gray-600">
            Showcase of our standardized, reusable UI components
          </p>
        </div>

        {/* Button Variants */}
        <Card title="Button Variants" className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger Button</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button fullWidth className="max-w-xs">Full Width</Button>
          </div>
        </Card>

        {/* Input Components */}
        <Card title="Input Components" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Basic Input"
              placeholder="Enter some text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Input
              label="Input with Error"
              placeholder="This has an error"
              error="This field is required"
              value=""
              onChange={() => {}}
            />

            <Input
              label="Input with Helper Text"
              placeholder="Enter your email"
              helperText="We'll never share your email"
              value=""
              onChange={() => {}}
            />

            <Input
              label="Disabled Input"
              placeholder="This is disabled"
              disabled
              value="Disabled value"
              onChange={() => {}}
            />
          </div>
        </Card>

        {/* Card Variants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Default Card"
            subtitle="Standard card with shadow"
            variant="default"
          >
            <p className="text-gray-600">
              This is a default card with standard styling and shadow.
            </p>
          </Card>

          <Card
            title="Elevated Card"
            subtitle="Card with more shadow"
            variant="elevated"
          >
            <p className="text-gray-600">
              This card has more elevation with a stronger shadow.
            </p>
          </Card>

          <Card
            title="Outlined Card"
            subtitle="Card with border only"
            variant="outlined"
          >
            <p className="text-gray-600">
              This card uses only borders without background shadow.
            </p>
          </Card>
        </div>

        {/* Interactive Demo */}
        <Card title="Interactive Demo" className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Button onClick={handleButtonClick} loading={isLoading}>
              {isLoading ? 'Processing...' : 'Async Action'}
            </Button>
          </div>

          <div className="text-sm text-gray-600">
            <p>Input Value: <strong>{inputValue || 'None'}</strong></p>
          </div>
        </Card>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Demo Modal"
          description="This modal demonstrates our standardized modal component"
        >
          <div className="space-y-4">
            <p className="text-gray-700">
              This is a fully functional modal built with our standardized components.
              It includes proper accessibility features, keyboard navigation, and responsive design.
            </p>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ComponentDemo;