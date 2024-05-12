import type { Meta, StoryObj } from '@storybook/angular';
import { CategoryItemComponent } from './category-item.component';

const meta: Meta<CategoryItemComponent> = {
    title: 'CategoriesItem Component',
    component: CategoryItemComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<CategoryItemComponent>;

export const text: Story = {
    args: {
       
    }
};