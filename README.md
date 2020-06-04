# GoodReads

## Requirements

### Tools

- Node.js v12-Express
- React-Redux
- MongoDB-Mongoose

## Commands we run

#  focusing on backend
cd backend

# install node modules
npm i

#  focusing on frontend
cd ../frontend
# install node modules
npm i


### Port configuration
 See `process.env.PORT` in `backend/index.js`, how the value is retrieved with a fallback value of `4000`. So if `process.env.PORT` is not defined, `4000` will be used, just as it was before.

### Backend URL configuration

Local development and deployments work different in ways. In local, most of the time, `localhost` hostname (which points to your very own machine) is used with different port numbers. For real environments, most of the times, different URLs are used for different apps. So `localhost:4000/person/all` URLs will not work when we deploy our app.


### Backend mongoDB connection

For local setup we have used mongodb instance from our machine so far, which pointed out localhost. But in containerized world, because every container is like another machine in the network, localhost will not work. So we need to be able to change the mongodb url in our application. Therefore the `mongo-connection.js` has to change.

`mongoose.connect('mongodb://localhost/goodreads', ...` is the part where the mongodb instance is specified. To make it configurable we will just replace the hardcoded text with `process.env.MONGODB_CONNECTION_STRING`. So the result is going to be `mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/goodreads", ...`. The or statement (`||`) allows us to define a fallback (default) value, so our app will behave exactly the same way if we do not configure the`MONGODB_CONNECTION_STRING` environment variable.
