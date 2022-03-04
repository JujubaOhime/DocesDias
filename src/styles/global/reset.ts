export const reset = {
	"body,h1,h2,h3,h4,h5,h6,p,ol,ul,textarea,select,option,table,th,td,blockquote,hr,button,figure":
		{
			margin: "0",
			padding: "0",
		},

	"header, footer, article, nav, section": {
		display: "block",
	},

	html: {
		textSizeAdjust: "none",
		wordWrap: "break-word",
		fontSmooth: "antialiased",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
		fontSize: "62.5%",
	},

	"ul,ol": {
		listStyle: "none",
	},

	button: {
		border: 0,
		cursor: "pointer",
		background: "transparent",
	},

	"body, textarea, input, select, option, button": {
		fontSize: "1.6rem",
		lineHeight: "1.2",
		fontWeight: "500",
		fontFamily: "Comfortaa",
	},

	img: {
		border: 0,
		fontSize: 0,
	},

	textarea: {
		resize: "none",
	},

	a: {
		textDecoration: "none",
	},

	body: {
		fontFamily: "Comfortaa",
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},

	"input[type='search']::-webkit-search-decoration, input[type='search']::-webkit-search-cancel-button, input[type='search']::-webkit-search-results-button, input[type='search']::-webkit-search-results-decoration":
		{
			display: "none",
		},

	"@media (prefers-reduced-motion: reduce)": {
		"*, ::before, ::after": {
			animationDuration: "0.001s !important",
			animationIterationCount: "1 !important",
			transitionDuration: "0.001s !important",
			transitionDelay: "0s !important",
		},
	},
};
