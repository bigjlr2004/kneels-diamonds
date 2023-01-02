import { getData, setData } from "./dataAccess.js"
const sizes = getData("sizes")

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setData(parseInt(event.target.value),"size")
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" id="size${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

