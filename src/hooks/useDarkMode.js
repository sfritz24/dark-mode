import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const app = document.querySelector('.App')
    const toggleMode = e => {
        e.preventDefault();
        setValue(!value);
        if (value === false) {
            app.classList.add('dark-mode')
        } else if (value === true) {
            app.classList.remove('dark-mode')
        }
      };

    return [value, toggleMode]
};

export default useDarkMode;