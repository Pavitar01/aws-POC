### **📌 Pre-Signed URL for PUT Object (Uploading Files to S3)**  

A **pre-signed PUT URL** allows users to upload files directly to an **S3 bucket** without needing AWS credentials. This is useful for frontend apps or third-party services that need to upload files securely.

---

### **🛠️ How Pre-Signed PUT URLs Work**  
1. The backend (Node.js) generates a **pre-signed URL** for uploading.  
2. The frontend (React, Postman, etc.) **uses the URL to upload a file** directly to S3.  
3. The URL **expires** after a specified time (default is **15 minutes**, but you can customize it).  

---

### **📝 Steps to Generate a Pre-Signed PUT URL**
We will use the **AWS SDK v3** (`@aws-sdk/client-s3` and `@aws-sdk/s3-request-presigner`).

#### **1️⃣ Install Dependencies**  
```sh
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner dotenv
```

#### **2️⃣ Implement Code for Pre-Signed PUT URL**
```javascript
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
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
  await getPutObjectUrl("/uploads/images/test-image.png", "image/png");
})();
```

---

### **🎯 How to Use the Pre-Signed PUT URL**
Once the URL is generated, you can **upload a file using `curl` or Postman`.  

#### **✅ Upload File Using `curl`**
```sh
curl -X PUT -T "/uploads/images/test-image.png" "YOUR_GENERATED_SIGNED_URL" -H "Content-Type: image/png"
```

#### **✅ Upload Using JavaScript (Frontend)**
```javascript
async function uploadFile(file) {
  const response = await fetch("YOUR_GENERATED_SIGNED_URL", {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type,
    },
  });

  if (response.ok) {
    console.log("File uploaded successfully!");
  } else {
    console.error("Upload failed:", response.statusText);
  }
}
```

---

### **📌 Summary**
1. **Pre-signed PUT URLs** allow uploading files directly to S3 without exposing AWS credentials.  
2. The backend generates a URL using `PutObjectCommand`.  
3. The frontend uploads files via `fetch()` or `curl`.  
4. The URL **expires** after a specified time (default: **15 min**, configurable).  

✅ This is **efficient** and **secure** for direct file uploads! 🚀