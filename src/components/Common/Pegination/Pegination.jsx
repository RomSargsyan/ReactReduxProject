import React, { useState } from 'react';
import style from './Pegination.module.css';

const Pegination = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
  const pagesCount = Math.ceil(totalUsersCount/pageSize);
  const pages = [];
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const endPortion = Math.ceil(pagesCount/pageSize)
  const [portionSize, setChangePointSize] = useState(1)
  const leftPegination = (portionSize - 1)*pageSize + 1;
  const rightPegination = portionSize*pageSize;

  return (
    <div className={style.rowPegination}>
      <div>
        { portionSize > 1 &&  <button onClick={ () => {setChangePointSize(portionSize - 1)}}>Prev</button> }
      </div>
      {
        pages
        .filter(page => page >=leftPegination && page <= rightPegination)
        .map(page => {
          return (
              <div key={page} onClick={() => { onPageChanged(page) }}
                    className={page === currentPage? style.currentPage : null}>
                {page}
              </div>
        )})
      }
      <div>
        { portionSize < endPortion && <button onClick={ () => {setChangePointSize(portionSize + 1)}}>Next</button> }
      </div>
    </div>
  )
}

export default Pegination;
