import router from "next/router";
import { useEffect, useMemo, useState } from "react";

import { sendTelegramMessage } from "utils/telegramSender";
import { options, phoneMask } from "utils/form";

import * as Styled from "./styled";

/*
type ErrorType = {
	name: boolean | undefined;
	DDD: boolean | undefined;
	order: boolean | undefined;
	phone: boolean | undefined;
};*/

const OrderForm = () => {
	const [name, setName] = useState<string>("");
	const [DDD, setDDD] = useState<string>("");
	const [order, setOrder] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	/*
	const [error, setError] = useState<ErrorType>({
		name: undefined,
		DDD: undefined,
		order: undefined,
		phone: undefined,
	});*/

	const [response, setResponse] = useState<Response | { ok: boolean }>();

	const isValid = useMemo(() => {
		return (
			name.trim().length > 2 &&
			phone.trim().length > 8 &&
			order.trim().length > 10 &&
			order.trim().length < 4000
		);
	}, [name, order, phone]);

	const submitHandler = async (event: { preventDefault: () => void }) => {
		event.preventDefault();

		if (isValid) {
			setResponse(
				await sendTelegramMessage(
					`nome: ${name}, telefone: ${DDD}${phone.replace(
						"-",
						""
					)} https://api.whatsapp.com/send?phone=55${DDD}${phone.replace(
						"-",
						""
					)}, pedido: ${order}`
				)
			);
		}
	};

	useEffect(() => {
		if (response && response.ok) {
			alert(
				"Pedido enviado com sucesso! Logo entraremos em contato. Muito obrigada e volte sempre!"
			);
			router.push("/cardapio/concluido");
		}

		if (response && response.ok === false) {
			alert("Desculpe, não deu certo :(. Tente novamente mais tarde");
		}
	}, [response]);

	return (
		<Styled.Form onSubmit={submitHandler}>
			<Styled.InputContainer fullWidth>
				<label htmlFor="name">Nome</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Digite seu nome"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
			</Styled.InputContainer>

			<Styled.InputContainer>
				<label htmlFor="DDD">DDD</label>
				<select
					id="DDD"
					value={DDD}
					onChange={(event) => {
						setDDD(event.target.value);
					}}
				>
					{options()}
				</select>
			</Styled.InputContainer>

			<Styled.InputContainer>
				<label htmlFor="phone">Celular</label>
				<input
					type="phone"
					id="phone"
					name="phone"
					placeholder="99999-9999"
					value={phone}
					onChange={(event) =>
						setPhone(phoneMask(event.target.value).trim())
					}
					maxLength={10}
				/>
			</Styled.InputContainer>

			<Styled.InputContainer fullWidth>
				<label htmlFor="order">Pedido</label>
				<textarea
					id="order"
					value={order}
					onChange={(event) => setOrder(event.target.value)}
					rows={4}
				/>
			</Styled.InputContainer>

			<Styled.Button type="submit" value="Enviar" disabled={!isValid} />
		</Styled.Form>
	);
};
export default OrderForm;
