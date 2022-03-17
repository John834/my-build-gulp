import babel from "gulp-babel";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import webpack from "webpack-stream";
import { obj } from "../config/obj.js"

export const js = () => {
	return app.gulp.src(app.path.src.js, {sourcemaps: obj.isDev})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError(obj.js.notify)
		))
		.pipe(babel())
		.pipe(webpack({
			mode: "production",
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream())
}