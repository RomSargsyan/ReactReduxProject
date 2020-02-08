import React, { useState } from 'react';
import style from './Pegination.module.css';

const Pegination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
  let pages = [];
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let endPortion = Math.ceil(pagesCount/props.pageSize)
  let [portionSize, setChangePointSize] = useState(1)
  let leftPegination = (portionSize - 1)*props.pageSize + 1;
  let rightPegination = portionSize*props.pageSize;

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
              <div key={page} onClick={() => { props.onPageChanged(page) }}
                    className={page === props.currentPage? style.currentPage : null}>
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
