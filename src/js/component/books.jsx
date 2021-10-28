import React from "react";
import PropTypes from "prop-types";

const Books = props => {
	return (
		<div className="row">
			{props.listBoks.map((value, index) => {
				return (
					<div className="card col-3" key={index}>
						<img
							className="card-img-top"
							src={value.cover}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{value.title}</h5>
							<p className="card-text">{value.content_short}</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

Books.propTypes = {
	listBoks: PropTypes.array
};
export default Books;
