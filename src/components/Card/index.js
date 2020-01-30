import React from "react";
import PropTypes from "prop-types";

export default function Card({ userInfo }) {
	return (
		<div data-testid="card">
			<span>{userInfo.full_name}</span>
		</div>
	);
}

Card.propTypes = {
	userInfo: PropTypes.object
};
