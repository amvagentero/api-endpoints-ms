# api-endpoints-ms
Uploads a connector csv file to S3

## Set up and run
create `.env` file in `/` with following properties:
```
SERVER_PORT
LOG_LEVEL
AWS_S3_REGION
AWS_S3_BUCKET_NAME
AWS_S3_ACCESS_KEY_ID
AWS_S3_SECRET_ACCESS_KEY
```
!! There is not default port !!

and execute the following commands:

```sh
# install dependencies
$ npm install

# start the server
$ npm run start
```

## Usage
Basic REST API endpoints
    
- upload csv file with `POST /upload-csv`. the file must be uplodaded with `file` name
- check health status with `GET /health`

example:

```sh
curl  -X POST -F expert=5857f7d5d1895f0004fab32d \
    -F file=@/Users/user/Folder/customer_list.csv  \
    http://localhost:3000/upload-csv
```