
import { getData, setData } from "./dataAccess.js"


const metals = getData("metals")




document.addEventListener(
    "change", (event) => {
        if (event.target.name === "metal") {
            setData(parseInt(event.target.value),"metal") // this sets the state with the value of the target that was selected
        }
       
    }
)




export const Metals = () => {

    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {

        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" id="metal${metal.id}"/> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

