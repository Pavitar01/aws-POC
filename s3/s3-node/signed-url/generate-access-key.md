### **🛠️ Steps to Generate Access Keys**  

#### **Step 1: Create a New IAM User**  
1️⃣ Go to **AWS Management Console**  
2️⃣ Search for **IAM** and open the IAM service  
3️⃣ Click on **Users** (from the left menu)  
4️⃣ Click on **Add users**  
5️⃣ Enter a **User name** (e.g., `new-user`)  
6️⃣ **Do not assign any permissions** (skip permissions setup)  
7️⃣ Click **Next** → **Create user**  

---

#### **Step 2: Generate Access Keys for the User**  
1️⃣ Open the **IAM service** in AWS Console  
2️⃣ Click on **Users**  
3️⃣ Select the newly created user (`new-user`)  
4️⃣ Go to the **Security credentials** tab  
5️⃣ Scroll down to the **Access keys** section  
6️⃣ Click **Create access key**  
7️⃣ Select **Command Line Interface (CLI)** as the use case  
8️⃣ Click **Next** → **Create access key**  
9️⃣ Copy and **save** the `Access Key ID` and `Secret Access Key` securely  


```jsx

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
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
  const signedUrl = await getSignedUrl(s3Client, command);
  return signedUrl;
};

(async () => {
    //here key means the path of the image
  console.log(await getObjectUrl("india.svg"),"url");
})();

```
can add expiry
  ```jsx
const signedUrl = await getSignedUrl(s3Client, command,{expiresIn:12});
  ```


#### Now if user still does not have permission to access just add permission or add that user in any group having s3 permission


now any one can access on be half of this user:

https://pavitar-singh-dev-private.s3.eu-north-1.amazonaws.com/india.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZMOUTNOPQNH5U5UV%2F20250312%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250312T064155Z&X-Amz-Expires=900&X-Amz-Signature=0e110302d7051ccf079e0256363c7908ff507310f40ba42edc03994b2868745a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject

---
