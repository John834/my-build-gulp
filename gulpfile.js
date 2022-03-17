import gulp from "gulp";
import { path } from "./gulp/config/path.js";
// tasks
// import { html } from "./gulp/tasks/html.js";
import { pug } from "./gulp/tasks/pug.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { server } from "./gulp/tasks/server.js";
import { clean } from "./gulp/tasks/clean.js";
// plugins
import { plugins } from "./gulp/config/plugins.js";

import { obj } from "./gulp/config/obj.js";

global.app = {
	gulp,
	path,
	plugins
}

const watcher = () => {
	app.gulp.watch(path.watch.html, pug)
	app.gulp.watch(path.watch.scss, scss)
	app.gulp.watch(path.watch.js, js)
	app.gulp.watch(path.watch.images, images)
}

const mainTasks = gulp.parallel(fonts, images, pug, scss, js)
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))
const prod = gulp.series(clean, mainTasks)

gulp.task("default", dev)

gulp.task("default", obj.isProd ? prod : dev)