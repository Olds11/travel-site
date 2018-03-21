var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
fs = require("fs"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"), //let's you use variables 
nested = require("postcss-nested"), //let's you nest within CSS code
cssImport = require("postcss-import"), //let's you use @import
browserSync = require("browser-sync"), //sync browser
mixins = require("postcss-mixins"), //let's you use mixins
svgSprite = require("gulp-svg-sprite"), 
rename = require("gulp-rename"),
hexrgba = require("postcss-hexrgba"); //let's you use variable hex color values in rgba() format

gulp.task("default", function() {
	console.log("Yay!");
});


gulp.task("styles", function(){
	return gulp.src("./app/assets/styles/styles.css") //need return because gulp.src is asynchronus 
	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))  //postcss requires array in ()
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


//sprite

var config = {
	mode:  {
		css: {
			render: {
				css: {
					template: "sprite.css"
				}
			}

		}
	}
} //need to define in object literal for sprite package to work

gulp.task("createSprite", function(){
	return gulp.src("./app/assets/images/icons/**/*.svg")
	.pipe(svgSprite(config))
	.pipe(gulp.dest("./app/temp/sprite"));
});

gulp.task("copySpriteGraphic", ["createSprite"], function() {
	return gulp.src("./app/temp/sprite/css/**/*.svg")
	.pipe(gulp.dest("./app/assets/images/sprites"));
});

// gulp.task("createSprite", function(){
// 	return gulp.src("../images/icons/**/*.svg")
// 		.pipe(svgSprite(config))
// 		.pipe(gulp.dest("./app/temp/sprite"));

// });

gulp.task("copySpriteCSS", ["createSprite"], function() {
	return gulp.src("./app/temp/sprite/css/*.css")
	.pipe(rename("_sprite.css"))
	.pipe(gulp.dest("./app/assets/styles/modules"));
});

gulp.task("icons", ["createSprite", "copySpriteGraphic", "copySpriteCSS"]);











