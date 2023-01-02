
import { getData, setData } from "./dataAccess.js"
const styles = getData("styles")

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setData(parseInt(event.target.value),"style") //this sets the state with the target value of what was selected
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {

        return `<li>
        <input type="radio" name="style" value="${style.id}" id="style${style.id}" /> ${style.style}
    </li>`
})
    
   

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

