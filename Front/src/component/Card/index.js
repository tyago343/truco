import React from 'react'
import { ESPADA, BASTO, ORO, COPA} from './constants'

export class Card{
    constructor(value, palo, num){
        this.state = {
            value,
            palo,
            num
        }
    }
}
export const deck = [
    new Card(14, ESPADA, 1),
    new Card(13, BASTO, 1),
    new Card(12, ESPADA, 7),
    new Card(11, ORO, 7),
    new Card(10, ORO, 3),
    new Card(10, ESPADA, 3),
    new Card(10, BASTO, 3),
    new Card(10, COPA, 3),
    new Card(9, ORO, 2),
    new Card(9, ESPADA, 2),
    new Card(9, BASTO, 2),
    new Card(9, COPA, 2),
    new Card(8, ORO, 1),
    new Card(8, COPA, 1),
    new Card(7, ORO, 12),
    new Card(7, ESPADA, 12),
    new Card(7, BASTO, 12),
    new Card(7, COPA, 12),
    new Card(6, ORO, 11),
    new Card(6, ESPADA, 11),
    new Card(6, BASTO, 11),
    new Card(6, COPA, 11),
    new Card(5, ORO, 10),
    new Card(5, ESPADA, 10),
    new Card(5, BASTO, 10),
    new Card(5, COPA, 10),
    new Card(4, BASTO, 7),
    new Card(4, COPA, 7),
    new Card(3, ORO, 6),
    new Card(3, ESPADA, 6),
    new Card(3, BASTO, 6),
    new Card(3, COPA, 6),
    new Card(2, ORO, 5),
    new Card(2, ESPADA, 5),
    new Card(2, BASTO, 5),
    new Card(2, COPA, 5),
    new Card(1, ORO, 4),
    new Card(1, ESPADA, 4),
    new Card(1, BASTO, 4),
    new Card(1, COPA, 4),

]
