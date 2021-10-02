import iconSun from '../../../../../assets/icons/icon-sun.svg';
import iconMoon from '../../../../../assets/icons/icon-moon.svg';
import { useState } from 'react';

export default function HeaderButton() {
    const handleToggleTheme = () => {
        setThemeFlag(!themeFlag);
    };

    const [themeFlag, setThemeFlag] = useState(true);

    return themeFlag ? (
        <input
            type='image'
            src={iconSun}
            alt='SunIcon'
            onClick={handleToggleTheme}
        ></input>
    ) : (
        <input
            type='image'
            src={iconMoon}
            alt='MoonIcon'
            onClick={handleToggleTheme}
        ></input>
    );
}
