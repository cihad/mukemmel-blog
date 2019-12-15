import { Pagination } from "react-bootstrap"
import Link from "next/link"

export default ({ current, pages }) => (
	<>
		<Pagination>
			{
				Array(pages).fill().map((_, i) => (
					<Pagination.Item key={i} active={current == i+1} href={`http://localhost:3000/?page=${i+1}`}>
						{i+1}
					</Pagination.Item>
				))
			}
		</Pagination>
	</>
)