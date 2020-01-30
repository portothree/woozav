import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

export default function Card({ userInfo }) {
	const { photo, full_name, role } = userInfo;

	return (
		<div data-testid="card" className="user-card">
			<img className="user-card__photo" src={photo} alt="Profile pic" />
			<strong>{full_name}</strong>
			<span>{role}</span>
		</div>
	);
}

Card.propTypes = {
	userInfo: PropTypes.object
};
