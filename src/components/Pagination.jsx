import { useQuery } from "@apollo/client";
import { useState } from "react";
import BsPagination from "react-bootstrap/Pagination";

const Pagination = (props) => {
	const totalPages = Math.ceil(props.totalProducts / props.paginationLimit);
	const [activePage, setActivePage] = useState(1);
	let items = [];
	for (let number = 1; number <= totalPages; number++) {
		items.push(
			<BsPagination.Item
				key={number}
				active={number === activePage}
				onClick={() => handlePagination(number)}
			>
				{number}
			</BsPagination.Item>
		);
	}

	const handlePagination = async (number) => {
		setActivePage(number);
		props.setOffset((number - 1) * props.paginationLimit);
	};

	return (
		<div className={props.className}>
			<BsPagination className="justify-content-center">{items}</BsPagination>
			<br />
		</div>
	);
};

export default Pagination;
