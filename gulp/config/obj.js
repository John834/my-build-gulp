const isProd = process.argv.includes("--production")
const isDev = !isProd

export const obj = {
	isProd,
	isDev,
	pug: {
		notify: {
			title: "Pug",
			message: "Error: <%= error.message %>"
		},
		pugs: {
			// сжатие HTML файла
			pretty: false,
			// Показывает в терминале какой файл обработан
			// verbose: true,
		}
	},
	scss: {
		notify: {
			title: "SCSS",
			message: "Error: <%= error.message %>"
		},
		autoprefix: {
			grid: true,
			overrideBrowserslist: ["last 3 versions"],
			cascade: true
		}
	},
	js: {
		notify: {
			title: "JS",
			message: "Error: <%= error.message %>"
		},
	},
	image: {
		notify: {
			title: "Images",
			message: "Error: <%= error.message %>"
		},
		imagemin: {
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			interlaced: true,
			optimizationLevel: 3, // 0 to 7
			verbose: true
		}
	}
}