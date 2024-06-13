
import type { Meta, StoryObj } from '@storybook/angular';
import { ProductsComponent } from './products.component';

const meta: Meta<ProductsComponent> = {
    title: 'Products Component',
    component: ProductsComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<ProductsComponent>;

export const text: Story = {
    args: {
    }
};
