const bot = {
	token: "5292933983:AAHX0fuaAjW9dqp_EyimVEP8VzDqAt6cSqo",
	id: "-632068514",
};

export const sendTelegramMessage = async (message: string) => {
	return await fetch(
		`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.id}&text=${message}`
	);
};
