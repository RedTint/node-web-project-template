# Client
- All client code must be placed inside this folder

# Build Folder
- `build/` folder will contain build files after running `gulp build`

# Dev Folder
- `dev/` folder must contain all development files

# How to Build
- Run `npm install && bower install` to install dependencies
- Run `gulp build` to build project and populate `build/` folder.

# Gulp Tasks

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
