import React from 'react';
import { render, screen } from '@testing-library/react';
import NCFSE2023Sidebar from './NCFSE2023Sidebar.js';

describe('NCFSE2023Sidebar', () => {
  it('renders sidebar title and video', () => {
    render(<NCFSE2023Sidebar />);
    expect(screen.getByText('NCFSE-2023 Teacher Guidance')).toBeInTheDocument();
    expect(screen.getByTitle("NCF 2023: A Teacher's Guide")).toBeInTheDocument();
  });

  it('renders all guidance sections', () => {
    render(<NCFSE2023Sidebar />);
    expect(screen.getByText('Curriculum Structure & Stages')).toBeInTheDocument();
    expect(screen.getByText('Curricular Areas')).toBeInTheDocument();
    expect(screen.getByText('Pedagogy')).toBeInTheDocument();
    expect(screen.getByText('Assessment')).toBeInTheDocument();
    expect(screen.getByText('Values & School Culture')).toBeInTheDocument();
  });
});
