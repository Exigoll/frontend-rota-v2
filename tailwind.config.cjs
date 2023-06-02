const { fontFamily, colors } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			"screenMax1920": { "max": "1920px" },
			"screenMax1366": { "max": "1366px" },
			"screenMax1280": { "max": "1280px" },
			"screenMax1024": { "max": "1024px" },
			"screenMax680": { "max": "680px" },
			"screenMax768": { "max": "768px" },
			"screenMax490": { "max": "490px" },
			"screenMax375": { "max": "375px" },
			"screenMin769": {"min": "769px"},
		},
		extend: {
			fontFamily: {
				title: ["'Inter', sans-serif"],
				text: ["'Roboto', sans-serif"],
			},
			colors: {
				black: "#000000",
				white: "#ffffff",
				gray: "#e9e9e9",
				darkBlue: "#1b2f52",
				heavyDark: "#1b1f20",
				lightDark: "#2e3536",
				peach: "#e77c58",
				darkPeach: "#f76435",
				placeholder: "rgba(0, 0, 0, 0.3)",
				overlay: "rgb(0 0 0 / 50%)"
			},
			scale: {
				99: "0.99",
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				".titleSection": {
					fontFamily: theme("fontFamily.title"),
					color: theme("colors.lightDark"),
					fontSize: "1.5rem",
					lineHeight: "2rem",
					fontWeight: 700,

					"@media (max-width: 1024px)": {
						fontSize: "1.25rem",
						lineHeight: "1.75rem",
					},

					"@media (max-width: 768px)": {
						fontSize: "1.125rem",
						lineHeight: "1.75rem",
					},
				},
				".titlePage": {
					marginBottom: "30px",
					fontFamily: theme("fontFamily.title"),
					color: theme("colors.lightDark"),
					fontSize: "1.875rem",
					lineHeight: "2.25rem",
					fontWeight: 700,
				},

				".btn": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "140px",
					height: "40px",
					border: "1px solid transparent",
					borderRadius: "10px",
					backgroundColor: "transparent",
					fontFamily: theme("fontFamily.title"),
					color: theme("colors.white"),
					fontSize: "16px",
					lineHeight: "16px",
					fontWeight: 700,
					cursor: "pointer",
					willChange: "transform",
					transition: "all 0.3s, transform 0.1s ease-in-out",

					"@media (max-width: 768px)": {
						width: "126px",
						height: "36px",
						fontSize: "14px",
						lineHeight: "14px",
					},

					"&--transparent": {
						color: theme("colors.lightDark"),
						cursor: "default",
					},

					"&--blue": {
						backgroundColor: theme("colors.darkBlue"),

						"@media (min-width: 769px)": {
							"&:hover": {
								borderColor: theme("colors.darkBlue"),
								backgroundColor: theme("colors.white"),
								color: theme("colors.darkBlue"),
							},
						},
					},
					"&--peach": {
						backgroundColor: theme("colors.peach"),

						"@media (min-width: 769px)": {
							"&:hover": {
								borderColor: theme("colors.peach"),
								backgroundColor: theme("colors.white"),
								color: theme("colors.peach"),
							},
						},
					},

					"&--menu": {
						width: "100px",
						justifyContent: "center",
						columnGap: "10px",
						borderRadius: "10px",
						backgroundColor: "transparent",
						color: theme("colors.white"),
						fontSize: "16px",
						lineHeight: "16px",
						fontWeight: "700",
						transition: "transform 0.1s, background-color 0.3s ease-in-out",
						cursor: "pointer",
						willChange: "transform",

						"@media (min-width: 769px)": {
							"&:hover": {
								backgroundColor: theme("colors.heavyDark"),
							},
						},

						"@media (max-width: 768px)": {
							fontSize: "14px",
							lineHeight: "14px",
						},

						"@media (max-width: 390px)": {
							width: "90px",
						},
					},
					
					"&:active": {
						transform: "scale(0.96)",
					}
				}
			});
			addUtilities({
				".transitionText": {
					transition: "color 0.3s ease-in-out",
				},
				".transitionIcon": {
					transition: "all 0.3s ease-in-out",
				},
				".transitionBorder": {
					transition: "border 0.3s ease-in-out",
				},
				".transitionAll": {
					transition: "transform 0.1s, color 0.3s, border 0.3s ease-in-out",
				},
				".transitionButton": {
					transition: "transform 0.1s, background-color 0.3s ease-in-out",
				},
				".boxShadow": {
					boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.2)",
				},
			});
		}),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
