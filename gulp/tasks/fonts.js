import fonter from "gulp-fonter";
import woff from "gulp-ttf2woff2"

export const fonts = () => {
	return app.gulp.src(app.path.src.fonts)
		.pipe(app.plugins.newer(app.path.build.fonts))
		.pipe(fonter({
			formats: ["ttf", "woff", "eot", "svg"]
		}))
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(woff())
		.pipe(app.gulp.dest(app.path.build.fonts))
}