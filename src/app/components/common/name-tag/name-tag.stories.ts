import type { Meta, StoryObj } from '@storybook/angular';
import { NameTagComponent } from './name-tag.component';
import { fn } from '@storybook/test';


const meta: Meta<NameTagComponent> = {
    title: 'Name Component',
    component: NameTagComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<NameTagComponent>;


export const text: Story = {
    args: {
        label: undefined,
    }
};





