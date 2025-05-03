PS D:\Bagverze> $env:DEBUG="development:*" //to setup env variable 
PS D:\Bagverze> npx nodemon app.js
[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node app.js`
Server is running on port 3000
  development:mongoose-connection Connected to MongoDB successfully +0ms


Remove-Item Env:DEBUG //to remove env setup


PS D:\Bagverze> $env:NODE_ENV="development" //Node ka environment hum development mai set kr rhe hai