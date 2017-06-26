# How to run
- Clone or downoload repo
- Run ```npm install``` to install dependecies
- Run a webserver from the root directory or run ```npm start```. This will start the webpack dev server on localhost:8080. Webpack will watch scss and js files and recompile the bundle on change and will update them in browser automatically. It won't write changes to disk, webpack dev server serves static files from memory. In order to write you changes to disk run ```npm run build```, this will write, concatenate, minify the assets and put them into build directory.