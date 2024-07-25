
import type { Meta, StoryObj } from '@storybook/angular';
import { CartComponent } from './cart.component';


const meta: Meta<CartComponent> = {
    title: 'Cart Component ',
    component: CartComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<CartComponent>;

export const primary: Story = {
    args: {
        buttonclick: () => {
            console.log("mocked click event");
        }
    }
};
