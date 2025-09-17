import { test, expect } from '@playwright/test';

test.describe('CTET Study App', () => {
  test('should load the main page', async ({ page }) => {
    await page.goto('/');

    // Check that the main heading is visible
    await expect(page.getByText('CTET Study App - UI Components Demo')).toBeVisible();
  });

  test('should display all UI components', async ({ page }) => {
    await page.goto('/');

    // Check that all main sections are visible
    await expect(page.getByText('Button Variants')).toBeVisible();
    await expect(page.getByText('Input Components')).toBeVisible();
    await expect(page.getByText('Interactive Demo')).toBeVisible();

    // Check that buttons are visible
    await expect(page.getByText('Primary Button')).toBeVisible();
    await expect(page.getByText('Secondary Button')).toBeVisible();
    await expect(page.getByText('Outline Button')).toBeVisible();
  });

  test('should handle button interactions', async ({ page }) => {
    await page.goto('/');

    // Test that buttons are clickable
    const primaryButton = page.getByText('Primary Button');
    await expect(primaryButton).toBeVisible();
    await primaryButton.click();

    // Test disabled button
    const disabledButton = page.getByText('Disabled');
    await expect(disabledButton).toBeDisabled();
  });

  test('should handle input interactions', async ({ page }) => {
    await page.goto('/');

    // Find the basic input
    const basicInput = page.getByLabel('Basic Input');
    await expect(basicInput).toBeVisible();

    // Type in the input
    await basicInput.fill('Hello Playwright');
    await expect(basicInput).toHaveValue('Hello Playwright');

    // Check that the value is displayed
    await expect(page.getByText('Hello Playwright')).toBeVisible();
  });

  test('should handle modal interactions', async ({ page }) => {
    await page.goto('/');

    // Open modal
    const openModalButton = page.getByText('Open Modal');
    await openModalButton.click();

    // Check that modal is open
    await expect(page.getByText('Demo Modal')).toBeVisible();
    await expect(page.getByText('This modal demonstrates our standardized modal component')).toBeVisible();

    // Close modal using close button
    const closeButton = page.getByLabel('Close modal');
    await closeButton.click();

    // Check that modal is closed
    await expect(page.getByText('Demo Modal')).not.toBeVisible();
  });

  test('should handle async button functionality', async ({ page }) => {
    await page.goto('/');

    // Click the async button
    const asyncButton = page.getByText('Async Action');
    await asyncButton.click();

    // Check that loading state appears
    await expect(page.getByText('Processing...')).toBeVisible();

    // Wait for async operation to complete
    await expect(page.getByText('Async Action')).toBeVisible();
  });

  test('should work on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');

    // Check that content is still accessible on mobile
    await expect(page.getByText('CTET Study App - UI Components Demo')).toBeVisible();

    // Test mobile interactions
    const openModalButton = page.getByText('Open Modal');
    await openModalButton.click();

    await expect(page.getByText('Demo Modal')).toBeVisible();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    // Check for proper heading structure
    const mainHeading = page.getByRole('heading', { level: 1 });
    await expect(mainHeading).toContainText('CTET Study App - UI Components Demo');

    // Check for proper button roles
    const buttons = page.getByRole('button');
    await expect(buttons.first()).toBeVisible();

    // Check for input labels
    const basicInput = page.getByLabel('Basic Input');
    await expect(basicInput).toHaveAttribute('type', 'text');
  });
});