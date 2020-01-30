import React from "react";
import { render } from "@testing-library/react";
import { FetchMock } from "@react-mock/fetch";

import Home from "../src/pages/Home";

const data = {
	users: [
		{
			id: 1,
			full_name: "Leonardo Ferreira",
			role: "Agricultor",
			photo:
				"https://images.generated.photos/nLDaKuZTAyRzaZR0bjIp1Fxa0B8YpJxyIVOMp2fHINs/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA1/MTEzNzkuanBn.jpg"
		},
		{
			id: 2,
			full_name: "Fernanda Santos",
			role: "Engenheira",
			photo:
				"https://images.generated.photos/m7QMg8FaMvmMjdGSGhoM5_uRYqCtbVz41gF4HYvbilc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzQ2NjguanBn.jpg"
		},
		{
			id: 3,
			full_name: "Adriana Pereira",
			role: "Farmacêutica",
			photo:
				"https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg"
		},
		{
			id: 4,
			full_name: "Antônio Souza",
			role: "Líder de Loja",
			photo:
				"https://images.generated.photos/agshNw3pPQchkr-Jlw34hyv_5_Oq-ycJHcJ1OWZ8TbU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA2/NDIzMDguanBn.jpg"
		},
		{
			id: 5,
			full_name: "João Pedro",
			role: "Operador de Guincho",
			photo:
				"https://images.generated.photos/KKkcilNjh4abZlsvEz3bUE54XgvFdzT33P6SG-TQUtg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAw/ODkzMzYuanBn.jpg"
		},
		{
			id: 6,
			full_name: "José Borges",
			role: "Redator",
			photo:
				"https://images.generated.photos/Bu8RVHwP27D70UjPPxtbVQM0_C9Y9aFR-tRO2Cj8RQE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NTEyOTMuanBn.jpg"
		}
	]
};

const renderHome = () => {
	return render(
		<FetchMock
			matcher="https://gist.githubusercontent.com/portothree/2468ea522ab014d6f0d6d9a3c3940c0c/raw/a69760de42fa8c1fbc7b44f35c3a305df21f18dd/data.json"
			response={data}
		>
			<Home />
		</FetchMock>
	);
};

test("should render data", async () => {
	const { findByRole } = renderHome();

	// I have used await here because
	// this method returns a Promise
	const userList = await findByRole("list");
	expect(userList.children.length).toEqual(data.users.length);
}, 20000);
