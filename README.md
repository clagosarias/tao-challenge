# Taotesting Test-takers Challenge

What you will find in this README:
  - Some assumptions and caveats.
  - Some insights during the development process.
  - How to start, build and test the project.


## Developing process

### Assumptions and caveats
I really didn't quite understand the challenge I believe.
It either was simpler than I expected, or I just missed something. That's why I decided to take additional steps with my challenge and tried to make it work in IE11 for example, or directly used vanilla JS which makes it a bit more difficult than using any framework.
### The user interface
I started with the UI because it helps me see what data structure I’ll be using and needing. I will just be using **one index.html** layout with a **single css file** that is the result of processing the `/scss/index.scss`. The `/scss/` folder includes all scss partials and the index.

I declared some Sass variables but would rather use **CSS custom properties** (CSS variables basically) whenever possible. (IE11 is not compatible with CSS variables)

### Reading the Data
I'm using the Fetch API which provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. But it also provides an easy, logical way to fetch resources asynchronously across the network. (JSON, CSV, etc)

### WebComponents
I'm using WebComponents because it does not matter which framework you end up using, you should be able to include them almost seamlessly. Now, in order to use WebComponents in IE11 I had to include a list of specific polyfills that are retrieved  in the `index.html` file whenever `window.Promise || window.fetch || window.Symbol` are not found in the browser's engine.

### Performance optimization
As there is almost no JS logic required by the excercise... there wasn't much that I could optimize there. But sill, apart from waiting the response of the API, everything should be render quite quickly on the browser.

### Start, build & test
To run development server

    npm install
    npm start
to test

    npm run test
and to build

    npm run build
which runs webpack in order to compile the polyfills for IE11 and also executes the tests.