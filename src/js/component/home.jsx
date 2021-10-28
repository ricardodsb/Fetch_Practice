import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Books from "./books.jsx";

const Home = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch(
			"https://www.etnassoft.com/api/v1/get/?category=libros_programacion"
		)
			.then(response => response.json())
			.then(response => {
				setBooks(response);
			});
	}, []);
	return (
		<div className="text-center mt-5">
			<Books listBoks={books} />
		</div>
	);
};

export default Home;
