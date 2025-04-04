import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./chip";

const meta = {
    title: "Components/chip",
    component: Chip,
    argTypes: {
        children: {
            control: 'text',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'success', 'error'],
        },
    },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Chip',
        variant: 'default'
    },
};
