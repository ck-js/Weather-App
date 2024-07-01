dist folder is the production ready folder as well as docs (its just a duplicate of dist as github pages uses docs as deployment directory) which may vary according to host platform.

use webpack 5 to bundle js modules from the src directory.

webpack dependencies include style-loader, css-loader 

components are created in src/page-load.js and exported to src/index.js to be appended to the DOM.

href attributes for anchor elements can be changed in src/page-load.js 

call to actions anchor href values are empty as not advised where to point user and its method of contact.

mind the spaghetti css rules, declerations and naming conventions.

feedback is welcome and appreciated at workwithcktoday@gmail.com