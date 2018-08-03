/* eslint-disable radix */
module.exports = {
  port: parseInt(process.env.SERVER_PORT),
  logLevel: process.env.LOG_LEVEL,

  aws: {
    s3: {
      region: process.env.AWS_S3_REGION,
      bucketName: process.env.AWS_S3_BUCKET_NAME,
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    },
  },
};
