import type { Meta, StoryObj } from '@storybook/angular';
import { PriceComponent } from './price.component';


const meta: Meta<PriceComponent> = {
    title: 'Price Component',
    component: PriceComponent,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<PriceComponent>;

export const text: Story = {
    args: {
        // label1: undefined,
        // label2: undefined,
    }
};
