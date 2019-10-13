# Udagram Image Filtering Microservice

This project runs as a Node-Express application in AWS to provide a
filtered download of requested images

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]



## Tasks

### Development

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. Run the development server with `npm run dev`
3. Verify changes by running the test suite `npm test`

Changes are made to *development* branch and then merged back into *master*

### Deployment

A production build is created under folder /www and this is configured
in `.elasticbeanstalk/config.yml` under the `deploy.artifact` property

```sh
npm run clean
npm run build
eb deploy
```

## Additional

Some extra features introduced into this project

### Tests

If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

### Custom Domain Name

Uses an AWS domain name of ```udaimagefilter```
