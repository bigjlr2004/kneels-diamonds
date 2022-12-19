
import { getData, setData } from "./dataAccess.js"

const options = getData("options")

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewelry_option") {
            setData(parseInt(event.target.value),"option") //this sets the state with the target value of what was selected
        }
    }
)

export const JewelryOptions = () => {
    let html = `<ul class="multiplier">`

    // Use .map() for converting objects to <li> elements
    const listOptionsArray = options.map(option => {

        return `<li>
        <input type="radio" name="jewelry_option" value="${option.id}" /> ${option.type}
    </li>`
})
    
   

    // Join all of the strings in the array into a single string
    html += listOptionsArray.join("")

    html += "</ul>"
    return html
}