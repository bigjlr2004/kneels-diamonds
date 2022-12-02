import { getMetals, setMetal } from "./database.js"
import { Orders } from "./Orders.js"

const metals = getMetals()

document.addEventListener(
    "change", (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value)) // this sets the state with the value of the target that was selected
        }
    }
)




export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {

        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

