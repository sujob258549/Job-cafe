

const getlocalstorase = () => {
    const getlocaldata = localStorage.getItem('local-data');
    if (getlocaldata) {
        return JSON.parse(getlocaldata);
    }
    return [];
};




const setLocalstorase = (id) => {
    const setdata = getlocalstorase();

    const exists = setdata.find(data => data === id);
    if (!exists) {
        setdata.push(id);
        localStorage.setItem('local-data', JSON.stringify(setdata));
    }
};


export { setLocalstorase, getlocalstorase }