import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import classes from "./Button.module.css";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    text?: string;
    variant?: "default" | "outlined";
}

export const Button = ({
    text = "Button",
    variant = "default",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(classes["ds-button"], classes[variant])}
            {...props}
        >
            {text}
        </button>
    );
};
