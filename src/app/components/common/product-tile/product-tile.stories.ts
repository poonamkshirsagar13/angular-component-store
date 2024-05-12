
import type { Meta, StoryObj } from '@storybook/angular';
import { ProductTileComponent } from './product-tile.component';

const meta: Meta<ProductTileComponent> = {
    title: 'ProductTile Component',
    component: ProductTileComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<ProductTileComponent>;

export const text: Story = {
    args: {
    }
};