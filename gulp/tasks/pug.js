import pugs from "gulp-pug"
import webphtml from "gulp-webp-html"
import { obj } from "../config/obj.js"

export const pug = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError(obj.pug.notify)
		))
		.pipe(webphtml())
		.pipe(pugs(obj.pug.pugs))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream())
}