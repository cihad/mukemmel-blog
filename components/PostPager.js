import { Pagination } from "react-bootstrap"
import Link from "next/link"
import { BASE_URL } from "../src/config"

export default ({ current, pages }) => (
	<div className="d-flex justify-content-center align-items-center mt-5">
		<span className="mr-3">Sayfalar</span>
		<Pagination className="mb-0">
			{
				Array(pages).fill().map((_, i) => (
					<Pagination.Item key={i} active={current == i+1} href={`${BASE_URL}/?page=${i+1}`}>
						{i+1}
					</Pagination.Item>
				))
			}
		</Pagination>
	</div>
)