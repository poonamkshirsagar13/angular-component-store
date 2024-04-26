import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';


const meta: Meta<HeaderComponent> = {
    title: 'Header Component',
    component: HeaderComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<HeaderComponent>;


export const text: Story = {
    args: {
    }
};





