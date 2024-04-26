import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';


const meta: Meta<InputComponent> = {
    title: 'Input Component',
    component: InputComponent,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const text: Story = {
    args: {
        label: undefined,
    }
};
