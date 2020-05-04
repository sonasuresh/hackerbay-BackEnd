# hackerbay-round1

```
A simple microservice in Nodejs, with three functionalities
```

## Authentication
## JSON patching
## Image Thumbnail Generation


## Getting Started

### Prerequisites

package.json <br/>
nodemodules  

```
npm init
npm install
```
### Start the server
```
nodemon
```


### Authentication

Set the request to POST and the url to /users/signin.<br/>
Hit the API, You will get a result in this format:
 
```
{ 
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI
			 6InVzZXJAZ21haWwuY29tIn0sImlhdCI6MTU4ODM0MD__g1MiwiZXhwIjoxNTg4MzQyMDUyfQ.
			 2vmGnsQdVmx433Bk3LiMhSYGrGsNCuSFQMrxdDcVKhU" 
}
```


### JSON patching

Set the request to POST and the url to /json/patch 

 
```
{
	"original":{
		"foo": "bar"
	},
	"patch":[
		{
			"op": "add", 
			"path": "/foo",
			"value": "1"
		}
		]
}
```

Hit the API.The token generated earlier to be attached to the header.<br/>
If JWT is missing or invalid then the request will be rejected otherwise, the patched json will be in the following format.

```
{
    "foo": "1"
}
```

### Image Thumbnail Generation

Set the request to POST and the url to /image/resize 

 
```
{"url":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"}
```

Hit the API.The token generated earlier to be attached to the header.<br/>
If JWT is missing or invalid then the request will be rejected otherwise, Image will be downloaded and converted to a thumbnail of size 50x50 pixels..


## Swagger-UI

Open API spec.

On development enviroment the api will serve an utility page Swagger-UI with the swagger documented endpoints and allow to generate requests. After sucessfully starting the api you may check on your browser open the following link:


* API: http://localhost:3000/api-docs/

## Unit Testing And Coverage

* mocha
* istanbul

```
npm run test
```

## Check linting

* eslint

## Built With

* Node.js
* Express
* Mocha
