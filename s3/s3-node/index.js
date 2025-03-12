import {
  DeleteObjectCommand,
  GetObjectCommand,
  ListObjectVersionsCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

dotenv.config();

// Initialize S3 Client
const s3Client = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY_ID,
  },
});

const getObjectUrl = async (key) => {
  const command = new GetObjectCommand({
    Bucket: "pavitar-singh-dev-private",
    Key: key,
  });
  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 12 });
  return signedUrl;
};


//to list all objects present in bucket
const listObjects = async () => {
  const list = new ListObjectVersionsCommand({
    Bucket: "pavitar-singh-dev-private",
    Key: '/',
  });
  const data = await s3Client.send(list)
  return data
};


//for deleting the object
const deleteObject = async () => {
  const list = new DeleteObjectCommand({
    Bucket: "pavitar-singh-dev-private",
    Key: '/uploads/images/test-image2.png',
  });
  const data = await s3Client.send(list)
  return data
};

// console.log(await deleteObject())
// console.log(await listObjects())
(async () => {
  console.log(await getObjectUrl("/uploads/images/test-image.png"), "url");
})();
