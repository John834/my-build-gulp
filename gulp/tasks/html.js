import size from "gulp-size"
import htmlmin from "gulp-htmlmin"
import webphtml from "gulp-webp-html"

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(webphtml())
		.pipe(size({ title: "Не Сжатый"}))
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(size({ title: "Сжатый"}))
		.pipe(app.plugins.browsersync.stream())
		.pipe(app.gulp.dest(app.path.build.html))
}