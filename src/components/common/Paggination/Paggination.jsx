import React, {useState} from 'react'
import s from './Paggination.module.css'

const Paggination = ({totalItemsCount, pageLimit, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageLimit)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPotionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 && <button onClick={ () => {setPotionNumber(1)} }>First</button>}
            {portionNumber > 1 && <button onClick={ () => {setPotionNumber(portionNumber - 1)} }>Prev</button>}

            <ul className={s.pagginationList}>
                {
                    pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {
                        return <li className={currentPage === p ? s.active : ``} key={p} onClick={() => {
                            onPageChanged(p)
                        }}>
                            <button>{p}</button>
                        </li>
                    })
                }
            </ul>

            {portionNumber < portionCount && <button onClick={ () => {setPotionNumber(portionNumber + 1)} }>Next</button>}
            {portionNumber < portionCount && <button onClick={ () => {setPotionNumber(portionCount)} }>Last</button>}
        </div>
    )
}

export default Paggination