import { database } from "./database.js"

export const getData = (data) => {
    return database[data].map(data => ({...data}))}

export const setData  = (data,option) => {
    database.orderBuilder[`${option}Id`] = data
    //regenerates the HTML for the user every time the state is changed.
    document.dispatchEvent(new CustomEvent("stateChanged"))
    const checkData = {...database.orderBuilder}
        if (checkData.metalId) {
            document.getElementById(`metal${checkData.metalId}`).checked = true
            
        }
        if (checkData.styleId) {
            document.getElementById(`style${checkData.styleId}`).checked = true
        }
        if (checkData.optionId) {
            document.getElementById(`option${checkData.optionId}`).checked = true
        }
        if (checkData.sizeId) {
            document.getElementById(`size${checkData.sizeId}`).checked = true
        }
    
}

    
    

    export const addCustomOrder = () => {
        const newOrder = {...database.orderBuilder}
        if(newOrder.metalId && newOrder.sizeId  && newOrder.optionId && newOrder.styleId ){
        //Copy the current state of user choices
        // const newOrder = {...database.orderBuilder}
    
        //add a new primary key to the object
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1
    
        //add a timestamp to the order
        newOrder.timestamp = Date.now()
    
        //add the new order object to custom orders state
        database.customOrders.push(newOrder)
    
        //reset the temporary state for user choices
        database.orderBuilder = {}
    
        //Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
        } else 
        window.alert(`Please make sure all choices are selected before placing order.`)
    }