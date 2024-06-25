@entva/express-trailingslash
============================

ExpressJS middleware that redirects requests with trailing slashes to a clean one without it

## Usage:

```javascript
app.use(require('@entva/express-trailingslash')());
```

When used together with serve-static, pass `redirect: false` option to it to avoid conflicts:

```javascript
app.use(require('serve-static')(`${__dirname}/public`, { redirect: false }));
```
