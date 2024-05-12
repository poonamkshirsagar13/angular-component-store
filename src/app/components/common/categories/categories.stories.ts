import type { Meta, StoryObj } from '@storybook/angular';
import { CategoriesComponent } from './categories.component';

const meta: Meta<CategoriesComponent> = {
    title: 'Categories Component',
    component: CategoriesComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<CategoriesComponent>;

export const text: Story = {
    args: {
        // desc1:undefined,
        // desc2:undefined,
        // disStyle:undefined
    }
};