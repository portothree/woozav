import React, { useState, useEffect } from "react";

import "./style.scss";

import Card from "../../components/Card";

export default function Home() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://gist.githubusercontent.com/portothree/2468ea522ab014d6f0d6d9a3c3940c0c/raw/a69760de42fa8c1fbc7b44f35c3a305df21f18dd/data.json"
			);

			const data = await response.json();

			setUsers(data.users);
		}

		fetchData();
	});

	return (
		<main className="home">
			<h1>Listagem de usuários</h1>

			<ul className="home__users-list">
				{users.map(user => (
					<li key={user.id}>
						<Card userInfo={user} />
					</li>
				))}
			</ul>
		</main>
	);
}
