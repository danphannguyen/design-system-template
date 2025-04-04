import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import classes from "./Button.module.css";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?: "default" | "outlined";
}

export const Button = ({ variant = "default", ...props }: ButtonProps) => {
    return (
        <button
            className={clsx(classes["ds-button"], classes[variant])}
            {...props}
        >
            Button
        </button>
    );
};
