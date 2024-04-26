import type { Meta, StoryObj } from '@storybook/angular';
import { DisplayImgComponent } from './display-img.component';

const meta: Meta<DisplayImgComponent> = {
    title: 'Display-Image Component',
    component: DisplayImgComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<DisplayImgComponent>;

export const text: Story = {
    args: {
    }
};

const imgBird = {
    src: 'assets/imgs/bird.png',
    alt: 'Bird Images',
};