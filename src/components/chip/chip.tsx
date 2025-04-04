import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import classes from "./chip.module.css";

export interface ChipProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "default" | "success" | "error";
}

export const Chip = ({
    variant = "default",
    ...props
}: ChipProps) => {
    return (
        <div className={clsx(classes["ds-chip"], classes[variant])} {...props}>
            <span>Chip</span>
        </div>
    );
};
