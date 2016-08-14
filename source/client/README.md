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

### Task: Clean
- Removes files from the `/build` folder
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
