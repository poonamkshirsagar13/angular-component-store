import type { Meta, StoryObj } from '@storybook/angular';
import { OfferComponent } from './offer.component';

const meta: Meta<OfferComponent> = {
    title: 'Offer Component',
    component: OfferComponent,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
};

export default meta;
type Story = StoryObj<OfferComponent>;

export const text: Story = {
    args: {
    }
};

