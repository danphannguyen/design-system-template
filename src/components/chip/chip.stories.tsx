import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./chip";

const meta = {
    title: "Components/chip",
    component: Chip,
    argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default'
    },
};
