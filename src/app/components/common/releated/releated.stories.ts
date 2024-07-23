
import type { Meta, StoryObj } from '@storybook/angular';
import { ReleatedComponent } from './releated.component';


const meta: Meta<ReleatedComponent> = {
    title: 'Releated Component',
    component: ReleatedComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<ReleatedComponent>;

export const primary: Story = {
    args: {
        buttonclick: () => {
            console.log("mocked click event");
        }
    }
};
