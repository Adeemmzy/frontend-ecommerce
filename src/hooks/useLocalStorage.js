const useLocalStorage = (key) => {
    const setItem = (value) => {
        localStorage.setItem(key, value)
    };
    const getItem = () => {
        return localStorage.getItem(key);
    };
    const delectItem = () => {
        localStorage.removeItem(key)
    }
    return { setItem, getItem, delectItem }
}

export default useLocalStorage;