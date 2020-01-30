import React from "react";
import ReactDOM from "react-dom";
import Card from "../src/components/Card";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const user = {
	id: 1,
	full_name: "Leonardo Ferreira",
	role: "Agricultor",
	photo:
		"https://images.generated.photos/nLDaKuZTAyRzaZR0bjIp1Fxa0B8YpJxyIVOMp2fHINs/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA1/MTEzNzkuanBn.jpg"
};

afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render(<Card userInfo={user} />, div);
});

it("renders card correctly", () => {
	const { getByTestId } = render(<Card userInfo={user} />);

	expect(getByTestId("card")).toHaveTextContent("Leonardo Ferreira");
});
