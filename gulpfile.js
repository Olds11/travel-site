var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
fs = require("fs"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
browserSync = require("browser-sync"),
mixins = require("postcss-mixins");

gulp.task("default", function() {
	console.log("Yay!");
});


gulp.task("styles", function(){
	return gulp.src("./app/assets/styles/styles.css") //need return because gulp.src is asynchronus 
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))  //postcss requires array in ()
	.on("error", function(errorInfo){
		console.log(errorInfo.toString()); //prints out error when it occurs
		this.emit("end"); //lets gulp to keep working even if an error occurs
	})
	.pipe(gulp.dest("./app/temp/styles")); 
});



//watch task
gulp.task("watch", function(){
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	watch("./app/index.html", function(){
		browserSync.reload(); //refreshes page on save
		
	});

	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("cssInject");
	});
});

gulp.task("cssInject", ["styles"], function(){  //injects css without refreshing page and the middle arguement array is the dependancy tasls (must run before cssInject)  
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());

});



