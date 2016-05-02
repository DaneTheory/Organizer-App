# Organizer-App
A Reactjs and Redux multi list app utilizing a remote data model with multiple reducers

# Say what?
This App shows off a few cool concepts:
<ul>
  <li>Remote to Local "State" updates via Axios middleware from JSON API</li>
  <li>"Stateless" functional components.</li>
  <li>Redux for managing "State"</li>
  <li>ReactJS for building out components and component inheritance</li>
</ul>

### A personal note:
This is engineering overkill, but what it shows off it shows off well. It makes more sense to keep relevant remote data seperate. The Lights button would make more sense in a production build to act on a local client state, not wait for a JSON response. Also, I used my own custom boilerplate to create this build. It needs improvement. Nuff' said.

## Instructions:
<ul>
  <li>Download Repo</li>
  <li>Run: <code>npm install</code></li>
  <li>Run: <code>gulp</code></li>
</ul>

### What's Under The Hood?
Following the instructions above will do few things:
<ul>
  <li>Cleans existing CSS/JS Files</li>
  <li>Rebuilds JS via webpack and CSS via gulp-sass</li>
  <li>Launches a dummy server with existing JSON model that app pulls from (found in data folder)</li>
  <li>Starts dummy JSON server on port http://localhost:3001</li>
  <li>Starts up webpack dev server on port http://localhost:8880</li>
  <li>Starts up Browser Sync proxy server on port http://localhost:3000</li>
</ul>

#### Routes for JSON server are:
<ul>
  <li><code>http://localhost:3001/activeState</code> which shows the toggle used for the light switch</li>
  <li><code>http://localhost:3001/meetings</code> which shows the Meetings List data</li>
  <li><code>http://localhost:3001/quotes/</code> which shows the Quotes List data</li>
  <li><code>http://localhost:3001/sales/</code> which shows the Sales List data</li>
  <li><code>http://localhost:3001/notes/</code> which shows the Notes List data</li>
</ul>

### To see what the app looks like when it doesn't have a JSON model to feed from:
<ul>
  <li>Run: <code>gulp serve:node</code> then checkout <code>http://localhost:8880/</code></li>
</ul>

### Gulp Tasks:
<ul>
  <li><code>gulp sass</code> builds out CSS file from SCSS source (located in stylesheets folder)</li>
  <li><code>gulp watch:sass</code> Runs Browser Sync reload on changes to SCSS files during dev</li>
  <li><code>gulp bs</code> runs <code>gulp sass</code> and sets up proxy server from webpack dev server on <code>http://localhost:8880/</code> to <code>http://localhost:3000/</code></li>
  <li><code>gulp clean:build</code> Cleans existing JS file in public/js/ folder</li>
  <li><code>gulp build</code> Runs <code>gulp clean:build</code> then builds out JS webpack bundle using the configs from webpack.config.js</li>
  <li><code>gulp watch:build</code> Runs <code>gulp build</code> then looks for changes in <code>app/</code> folder to hot reload webpack</li>
  <li><code>gulp restore-database</code> Dupes the original JSON model in <code>data/restore.JSON</code> to <code>data/db.JSON</code></li>
  <li><code>gulp serve:api</code> Runs <code>gulp restore-database</code> then starts up json-server on port 3001</li>
  <li><code>gulp serve:node</code> Starts up Express server using the configs setup in server.js</li>
  <li><code>gulp serve</code> Runs <code>gulp serve:node</code> then <code>gulp serve:api</code></li>
  <li><code>gulp watch</code> Runs <code>gulp bs</code> then <code>gulp build</code> then <code>gulp watch:build</code></li>
  <li><code>gulp</code> Runs <code>gulp watch</code> then <code>gulp serve</code></li>
</ul>

#TODO:
<ul>
<li>Remove Gulp for building CSS. Use Webpack instead.</li>
<li>Get Webpack's Hot Reload and Swap working for better dev</li>
<li>Remove Browser sync all together</li>
<li>Create auto deploy builds for dev and prod</li>
</ul>
