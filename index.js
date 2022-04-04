//console.log('hello capo !!!') // hello capo !!!
import {User} from "./User.js"
import {Product} from "./Product.js"
import {nanoid} from "nanoid"

const mySecret = process.env['DB_KEY']
console.log(mySecret) // myPassSecreto

const pappo = new User('Pappo', 'Blues', nanoid())
console.log(pappo) // User { name: 'Pappo', lastName: 'Blues', id: 'eihBBc3p7IqjHskk7DFyv' }
console.log(new Product('compact', 850)) //Product { name: 'compact', price: 850 }

