import type { Meta, StoryObj } from '@storybook/angular';
import { ImgComponent } from './img.component';

const meta: Meta<ImgComponent> = {
    title: 'Image Component',
    component: ImgComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<ImgComponent>;

const imgBird = {
    src: 'assets/imgs/bird.png',
    alt: 'Bird Images',
};

export const WithAnImageBird: Story = {
    args: {
        img: imgBird,
        label: undefined,
        enableBackground: false
    }
};

const imgAlien = {
    src: 'assets/imgs/alien.png',
    alt: 'Alian Images'
};

export const WithAnImageAlien: Story = {
    args: {
        img: imgAlien,
        label: 'Alien Vs Predeater',
        enableBackground: true,
        // backgroundColor: '',
        // imgCXStyle: 'backgroundColor: black; padding: 5px; margin: 10px'
    }
};


