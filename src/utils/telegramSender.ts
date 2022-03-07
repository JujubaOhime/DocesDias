const bot = {
	token: "5292933983:AAHX0fuaAjW9dqp_EyimVEP8VzDqAt6cSqo",
	id: "-1001774169319",
};

export const sendTelegramMessage = async (message: string) => {
	return await fetch(
		`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.id}&text=${message}`
	)
		.then((response) => {
			return response;
		})
		.catch(() => {
			return { ok: false };
		});
};
