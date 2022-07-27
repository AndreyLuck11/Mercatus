export const getPageCount = (tptalCount, limit) => {
    return Math.ceil(tptalCount/limit)
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for(let i = 0; i < totalPages; i++){
        result.push(i+1);
    }
    return result;
}