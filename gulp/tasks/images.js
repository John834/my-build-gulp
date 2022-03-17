import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import { obj } from "../config/obj.js";

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError(obj.image.notify)
		))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(imagemin(obj.image.imagemin))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browsersync.stream())
}