require('@babel/register');

const express = require('express');

const render = require('./render').default;

const app = express();

app.get('/', (req, res) => {
  const response = `
    <!doctype html>
    <html>
      <head>
        <title>OnlineStoreReactServer</title>
      </head>
      <body>
        <div id="root">${render()}</div>
      </body>
    </html>
  `;

  res.send(response);
});

app.listen(3001, () => console.log('Server is ready!'));
