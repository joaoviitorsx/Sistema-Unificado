import type { LabelProps } from '../types/components/label';

function Label({ children, className = '', htmlFor = '', ...props }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={`text-sm font-medium text-gray-700 mb-1 ${className}`}{...props}>
            {children}
        </label>
    );
}

export default Label;