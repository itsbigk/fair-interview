# Kyle Knott Fair interview submission

How to run the app (in dev mode):
  - npm install
  - npm run dev

You can also create a production build of the app by running:
  - npm run prod:compile

To compile and run the production build:
  - npm run prod

The structure of the app was partially inspired by the starter app that was linked to me in the original README.

I expanded on their implementation by upgrading the build system to use Webpack 4. This allowed for the config files to be a little more dry along with adding a few more features:
  - npm run prod:analyze (perform a bundle analysis)
  - npm run prod:compress (create a zipped archive of the app)
  - npm run dev:debug or npm run prod:debug (debug the application using the node inspect flag)


A test was added just to see if the app mounts correctly. I began adding more code to support newer tests by I started to run out of time. The tests can be run using:
  - npm run test

Pagination was an issue I ran into since I was getting strange behavior from then API always returning the first page instead of the page number I pass.

I decided to use the new Context API in React to manage state for the project since I had never worked with it before. I also needed a simpler solution than using Redux for a smaller application like this.

There is also some code splitting that I added for the Vehicle detail route. This can be seen in the routes file.
