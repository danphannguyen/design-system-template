import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import classes from "./chip.module.css";

export interface ChipProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "default" | "success" | "error";
    children?: React.ReactNode;
}

export const Chip = ({ variant = "default", children, ...props }: ChipProps) => {
    return (
        <span className={clsx(classes["ds-chip"], classes[variant])} {...props}>
            {children}
        </span>
    );
};
