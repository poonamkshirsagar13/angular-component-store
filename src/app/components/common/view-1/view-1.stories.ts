import type { Meta, StoryObj } from '@storybook/angular';
import { View1Component } from './view-1.component';

const meta: Meta<View1Component> = {
    title: 'View1 Component',
    component: View1Component,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<View1Component>;

export const text: Story = {
    args: {
    }
};