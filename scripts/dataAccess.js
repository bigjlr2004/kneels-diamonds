import { database } from "./database.js"

export const getData = (data) => {
    return database[data].map(data => ({...data}))}

export const setData  = (data,option) => {
    database.orderBuilder[`${option}Id`] = data}