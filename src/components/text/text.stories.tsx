import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

const meta = {
    title: "Components/Text",
    component: Text,
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Here is a text component",
        text_type: "heading",
    },
};
