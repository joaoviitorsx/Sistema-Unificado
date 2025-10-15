import type { CheckboxProps } from "../types/components/checkbox";
import { useState } from "react";

function Checkbox({Checked, onChange, label, className}: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(Checked);
    const handleCheckboxChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange(newChecked);
    }
    return (
        <div className={`flex items-center ${className}`}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"/>
            {label && <label htmlFor="checkbox" className="ml-2 block text-sm text-gray-900">{label}</label>}
        </div>
    );
}

export default Checkbox;