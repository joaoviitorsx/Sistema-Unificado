import type { ReactNode } from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children : ReactNode;
    className ?: string;
    htmlFor ?: string;
}