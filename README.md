# blogger
Get front end running in Mac OSX

* Install Homebrew
  1. Go to https://brew.sh/ and follow the instruction to install homebrew

* Install NVM (Optional)
  1. `brew update`

* Install NodeJS
  1. go to https://nodejs.org/en/download/ and download and install NodeJS
  2. OR, `brew install node@10` # recommend version 10.13.0

* Install yarn
  1. `brew install yarn`

* Install create-react-app
  1. `yarn global add create-react-app`

* Clone down the repo, and cd into `client` directory, and run the app
  1. `git clone https://github.com/7seven7lst/blogger.git`
  2. `cd client` `yarn install`
  3. `yarn start`
  4. application should start at port 3000

Running back end

* Install dependencies
  1. cd into `client`, and `yarn install`
  2. `yarn global add sequelize-cli`
  3. `yarn global add nodemon`

* Setup MySQL Database
  1. create a database called <blogger>
  2. edit username and password in `./config/config.js` file. Environment will be `development`

* Generate Table
  1. `cd ..` (cd to root directory of this repo)
  2. `sequelize db:migrate` to generate the table
  3. visit http://docs.sequelizejs.com/manual/tutorial/migrations.html if you need more stuff

* Setting up cloudinary secret
  1. create a file called `.env`
  2. chat with me to find out the cloudinary secret

* Spin up NodeJs Server
  1. `nodemon index`
  2. the server will start at port 4001

* API endpoint for getting the blogs
  1. get blogs: ${API_HOST}/api/v0/blogs?current_page=1&search
  2. the query parameter can be : title_keyword, content_keyword, page_size, current_page, category

* API endpoint for getting the popular blogs
  1. ${API_HOST}/api/v0/blogs/popular

* API endpoint for getting a specific blog by id
  1. ${API_HOST}/api/v0/blogs/:blog_id

* API endpoint for posting a new blog
  1. POST ${API_HOST}/api/v0/blogs

* API endpoint for updating an existing blog
  1. PUT ${API_HOST}/api/v0/blogs/:blog_id

* API endpoint for deleting an existing blog
  1. DELETE ${API_HOST}/api/v0/blogs/:blog_id