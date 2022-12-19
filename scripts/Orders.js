
import { getData } from "./dataAccess.js"
//calls the database to get the metals 
const metals = getData("metals")
const styles = getData("styles")
const sizes = getData("sizes")
const options = getData("options")


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
const foundOption = options.find(
    (option) => {
        return option.id === order.optionId
    }
)
const totalCost = (foundMetal.price + foundStyle.price + foundSize.price) * foundOption.multiplier

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
    const orders = getData("customOrders")

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

