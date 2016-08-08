# Project Template
Contains initial folder structure and files to start your Project with NodeJs.

# Templating Tasks

- [x] define folder structure
- [x] define /build folders where or for deployment code is built.
- [x] install `node`
- [x] install `gulp`
- [x] install `bower` 
- [ ] create `build sample` script with `gulp`
- [ ] test clone and build script
- [ ] fine 'How to Setup / Use' in README


# Root Folder Structure

```
    /documents - contains all client-provided assets, files, documents, text, etc..

    /source - contains all development source code (client & server)

        /client - contains all client/front-end code

            - See more details in 'Client Folder Structure'

        /server - contains all server/API code

            - See more details in 'Server Folder Structure'

```

# Client Folder Structure
- NOTE: This is inside /source/

```
    /client - contains all client/front-end code

        /bower_components - contains all vendor scripts. Created when you run `bower install --save` locally. This was placed in the /client root to avoid including unminified code to RELEASE BUILD.

        /node_modules - contains all node-related installs. Should be imported inside /build upon running 'gulp build'

        /build - contains the build script. Once built, should be immediately ready for deploying

            /assets - contains all project-related styles and scripts

                /css - contains all style-related scripts

                    all.css - concatenated, minified and obfuscated styles.

                /js - contains all project-related js scripts

                    all.js - concatenated, minified and obfuscated scripts.

                /images - contains all project-related images

            /vendor - contains all vendor-related styles and scripts. May contain none obfuscated, none minified and none concatenated scripts (some break when doing this).

                /css - contains all style-related scripts

                    all.css - concatenated, minified and obfuscated styles.

                /js - contains all javascript-related scripts

                    all.js - concatenated, minified and obfuscated scripts.

            index.html - contains your main <html> tags

            app.js - contains your node server script. Script should be merged with /server/build/app.js if deployed in the same server instance.

        bower.json - contains bower installs

        package.json - contains node installs and other node configs

```

# Server Folder Structure
- NOTE: This is inside /source/

```
/server - contains all server/API code

    /configs - suggested location for all config-related scripts.

    /database - suggested location for all database-related scripts.

        /model - suggested location for all database model-related scripts.

        /repositories - suggested location for all repository-related scripts. Mostly CRUD.


    app.js - contains your node server script. Script should be merged with /client/build/app.js if deployed in the same server instance.
```
