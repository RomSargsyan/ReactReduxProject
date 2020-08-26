import React, { useState } from 'react';

const Pegination = ({ totalUsersCount, pageSize, onPageChanged, currentPage }) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize);
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const endPortion = Math.ceil(pagesCount / pageSize)
	const [portionSize, setChangePointSize] = useState(1)
	const leftPegination = (portionSize - 1) * pageSize + 1;
	const rightPegination = portionSize * pageSize;

	return (
		<div className="row m-0">
			<div className="col-sm-12 col-md-5">
				<div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
					Showing {leftPegination} to {rightPegination} of {pagesCount} entries
        		</div>
			</div>
			<div className="col-sm-12 col-md-7">
				<div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
					<ul className="pagination">
						<li className="paginate_button page-item previous active" id="dataTable_previous">
							{
								portionSize > 1 && <button
									onClick={() => { setChangePointSize(portionSize - 1) }}
									tabIndex="0"
									className="page-link"
								>
									Previous
               					</button>
							}
						</li>
						{
							pages
								.filter(page => page >= leftPegination && page <= rightPegination)
								.map(page => {
									return (
										<li className="paginate_button page-item" key={page}>
											<div
												onClick={() => { onPageChanged(page) }}
												style={{ cursor: 'pointer' }}
												tabIndex="0"
												className="page-link c-pointer"
											>
												<span>{page}</span>
											</div>
										</li>
									)
								})
						}
						<li className="paginate_button page-item next active" id="dataTable_next">
							{
								portionSize < endPortion && <button
									onClick={() => { setChangePointSize(portionSize + 1) }}
									tabIndex="0"
									className="c-pointer page-link"
								>
									Next
                				</button>
							}
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Pegination;
