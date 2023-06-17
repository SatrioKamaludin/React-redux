//Actions, a function that returns an object
export const add = (title) => {
    return{
        type: "ADD",
        payload: title
    }
}

export const del = (id) => {
    return{
        type: "DEL",
        payload: id
    }
}
