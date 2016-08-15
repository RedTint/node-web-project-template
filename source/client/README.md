# Client Folder
This is the recommended place to put all your front-end code. We have setup SASS compilation, CSS and JS concatenation, minification and obfuscation all ready and easy to extend for you.

In this template, you'll mainly work with the `/dev` folder. All changes to your project will be done there. It doesn't matter whether you are working with AngularJs, Bootstrap, jQuery, Skeleton Framework, Angular Material, FontAwesome, etc... as long as you read and use our pre-setup [Gulp Tasks](https://github.com/RedTint/node-web-project-template/tree/master/source/client#gulp-tasks--automation). The power of this template relies heavily on those gulp tasks. Use it wisely.

_Please do note that some **Vendor Libraries** do have JS, CSS and even image files together so you will have to clone/copy them as is as you see fit. We provided the [Copy Files Gulp Task](https://github.com/RedTint/node-web-project-template/tree/master/source/client#task-copy-files-copy-files) to do that for you._


## Developing with Javascript
We recommend encapsulating all your javascripts with [anonymous self-invoking functions](http://www.w3schools.com/Js/js_function_definition.asp) so all variables and functions don't won't conflict.

## Developing with CSS and SASS
We recommend developing with SASS and let our template generate the CSS for you. Once you discover the power of SASS, you'll never go back. 

You can find our SASS folder in `/dev/sass`. Once compiled, it will create `/build/css/all.css` which contains all your styles. A SASSy way to do it. ;)

Read the [SASS Basics](http://sass-lang.com/guide).

## Build Folder
- `build/` folder will contain build files after running `gulp build`

## Dev Folder
- `dev/` folder must contain all development files

## How to Build
- Run `npm install && bower install` to install dependencies
- Run `gulp build` to build project and populate `build/` folder.

## Gulp Tasks / Automation

### Gulp Reference
https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

### Task: Clean (clean)
- Remove files from the `/build` folder
- Initial list of files are as follows (should always be an array):
```
    var files = [

        // Ignore
        '!build/images/*.md',

        // Asset folder
        'build/css/*.css',
        'build/js/*.js',
        'build/images/**/*',

        // Vendor folder
        'build/vendors/css/*.css',
        'build/vendors/js/*.js',
        'build/index.html'
    ];
```
- Adding `!` just before the file/folder should include the files/folder to the ignore list. Notice `!build/images/*.md` which adds the `*.md` file to ignore list.
- Should be updated as new files/folders are added to the project.

### Task: Copy Files (copy-files)
- Copy folders/files to the `build/` folder


### Task: Compile SASS (compile-sass)
- Compiles your SASS files for you.
- I recommend using SASS instead of directly editing your CSS files in the `css/` folder

### Task: Concat CSS (concat-css)
- Concatenates the css files specified in your code.
- Example:

```
var files = [
    'dev/css/**/*.css'
];
```
- `dev/css/**/*.css` will concatenate all css files found inside `css/` and its subfolders.

### Task: Concat Js (concat-js)
- Concatenates all JS files specified.
- Samples were provided:
```
var files = [
    'dev/js/example-script-01.js',
    'dev/js/example-script-02.js',
    'dev/js/example-script-03.js',
];
```

### Task: Concat Vendor CSS (concat-vendor-css)
- This task is provided for concatenating Vendor CSS files
- This maybe pointed to files found inside `bower_components/`

### Task: Concat Vendor JS (concat-vendor-js)
- This taks is provided for concatenating Vendor JS files
- This maybe pointed to files found inside `bower_components/`

### Task: Minify
- Minifies all specified JS files and CSS files.
- Note that minification will only happen if `NODE_ENV` is set to `live` (default is `dev`).

### Task: Build
- Runs all above listed tasks

# Issues:
- [ ] gulp-clean causes error when `./client/dev/images` has other folders.
