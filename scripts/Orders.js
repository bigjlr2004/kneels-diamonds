import { getCustomOrders, getMetals, getStyles, getSizes } from "./database.js"

//calls the database to get the metals 
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()


const buildOrderListItem = (order) => {
    
    //retuns the metal object that matches the metal id for the order
    const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)

const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
const totalCost = foundMetal.price + foundStyle.price + foundSize.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

