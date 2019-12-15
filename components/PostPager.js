import { Pagination } from "react-bootstrap"
import Link from "next/link"
import { BASE_URL } from "../src/config"

export default ({ current, pages }) => (
	<>
		<Pagination>
			{
				Array(pages).fill().map((_, i) => (
					<Pagination.Item key={i} active={current == i+1} href={`${BASE_URL}/?page=${i+1}`}>
						{i+1}
					</Pagination.Item>
				))
			}
		</Pagination>
	</>
)