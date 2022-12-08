import {Dispatch, FC, SetStateAction} from "react";

const Toggle: FC<{ checked: boolean, updateChecked: Dispatch<SetStateAction<boolean>> }> =
    ({checked, updateChecked}) => {
        return (
            <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox"
                       checked={checked}
                       onChange={(e) => updateChecked(!checked)} className="sr-only peer"/>
                <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-600">Logged</span>
            </label>
        );
    }

export {Toggle};
