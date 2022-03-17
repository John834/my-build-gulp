import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import webpCss from "gulp-webp-css";
import gulpif from "gulp-if";
import { obj } from "../config/obj.js";

const sass = gulpSass(dartSass)

export const scss = () => {
	return app.gulp.src(app.path.src.scss, {sourcemaps: obj.isDev})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError(obj.scss.notify)
		))
		.pipe(autoprefixer(obj.scss.autoprefix))
		.pipe(webpCss())
		.pipe(shorthand())
		.pipe(groupCssMediaQueries())
		.pipe(sass({
			outputStyle: obj.isDev ? "expanded" : "compressed",
		}))
		// .pipe(app.plugins.size({ title: "Не миницирован"}))
		.pipe(webpCss())
		// .pipe(app.gulp.dest(app.path.build.css))
		// .pipe(sass({
		// 	outputStyle: "compressed",
		// }))
		.pipe(gulpif(obj.isProd, rename({extname: ".min.css"})))
		// .pipe(app.plugins.size({ title: "миницирован"}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}

