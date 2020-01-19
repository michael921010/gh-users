
export const setItem = (dataType, data) => {
    localStorage.setItem(dataType, JSON.stringify(data));
};

export const getItem = (dataType) => {
    return JSON.parse(localStorage.getItem(dataType));
};