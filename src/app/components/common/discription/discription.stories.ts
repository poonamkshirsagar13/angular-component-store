import type { Meta, StoryObj } from '@storybook/angular';
import { DiscriptionComponent } from './discription.component';

const meta: Meta<DiscriptionComponent> = {
    title: 'Discription Component',
    component: DiscriptionComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<DiscriptionComponent>;

export const text: Story = {
    args: {
    }
};