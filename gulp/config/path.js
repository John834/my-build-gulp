const srcFolder = `./src`
const buildFolder = './dist'


export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`
	},
	src: {
		html: `${srcFolder}/index.pug`,
		scss: `${srcFolder}/scss/index.scss`,
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*{png,jpeg,jpg,gif,webp}`,
		fonts: `${srcFolder}/fonts/*.{ttf, otf, eot, otc, ttc, woff, woff2, svg}`
	},
	watch: {
		html: `${srcFolder}/**/*.pug`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*{jpg, jpeg, png, svg, gif, icon, webp}`,
	},
	clean: `${buildFolder}`
}