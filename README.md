# chatlog

A simple Chat UI made using React and Express

Steps to Install:

1. Git clone
2. Go to client folder then run `yarn install`
3. Run `yarn build` : This will create build folder to serve assets
4. Go to server folder
5. `yarn install`
6. Run `node index.js`
7. Hit `localhost:8000` on your machine

Features:

1. Responsive UI: For desktop viewports, it opens in bottom right corner, as a chatbox generally appears, but for mobile like
   viewports, it spreads to entire screen.
2. Sample data to mock the API response
3. Image lazyloading using chrome's loading attribute
4. Supports last stable version of chrome/firefox/safari/edge for simplicity, can be modified though!
5. Whenever a user's avatar is null, a default placeholder image is inserted for a good and consistent UI.
