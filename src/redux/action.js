export const Increment = (data) => ({
        type:"INCREMENT",
        payload:data
})
   
export const Decrement = (data) => {
    return {
        type:"DECREMENT",
        payload:data
    }
}
    