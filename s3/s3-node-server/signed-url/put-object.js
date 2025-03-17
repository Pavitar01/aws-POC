import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.ACCESS_KEY_ID,process.env.SECRET_KEY_ID,'mvfklmvfv')
// Initialize S3 Client
const s3Client = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY_ID,
  },
});

const getPutObjectUrl = async (filePathName, contentType) => {
  const command = new PutObjectCommand({
    Bucket: "pavitar-singh-dev-private",
    Key: filePathName, // Name of the path where file with file name to be uploaded
    ContentType: contentType, // MIME type (e.g., image/png, application/pdf)
  });

  try {
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 }); // Expires in 5 mins
    console.log("Pre-Signed PUT URL:", signedUrl);
    return signedUrl;
  } catch (error) {
    console.error("Error generating PUT URL:", error);
  }
};

// Call the function to generate a pre-signed URL
(async () => {
  await getPutObjectUrl("/uploads/images/test-image2.png", "image/png");
})();