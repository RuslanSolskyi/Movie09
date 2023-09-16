import React, { useState } from 'react';
import './ThemeSwitcher.css'

const ThemeSwitcher: React.FC = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    };

    const appThemeClass = isLightTheme ? 'light-theme' : 'dark-theme';

    return (
        <div className={`theme-switcher ${appThemeClass}`}>
            <label>
                Light Theme
                <input
                    type="checkbox"
                    checked={isLightTheme}
                    onChange={toggleTheme}
                />
            </label>

        </div>
    );
};

export default ThemeSwitcher;
