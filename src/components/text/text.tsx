import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import classes from "./text.module.css";

export interface TextProps extends ComponentPropsWithoutRef<"hr"> {
    text_type: "heading" | "subheading" | "base";
    text: string;
}

export const Text = ({ text_type, text = "Here is a text component ", ...props }: TextProps) => {
    let Tag: "h1" | "h2" | "p";
    if (text_type === "heading") {
        Tag = "h1";
    } else if (text_type === "subheading") {
        Tag = "h2";
    } else {
        Tag = "p";
    }

    return (
        <Tag className={clsx(classes["ds-text"], classes[text_type])} {...props}>
            {`${text} (${text_type})`}
        </Tag>
    );
};
