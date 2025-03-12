### **🔒 Private S3 Buckets & Pre-Signed URLs**  

#### **📌 What is a Pre-Signed URL?**  
A **pre-signed URL** is a temporary, **secure** URL that allows access to a specific S3 object **without making the entire bucket public**. It is generated using AWS credentials and comes with an **expiration time**.  

#### **✅ Why Use Pre-Signed URLs?**  
- **Grant temporary access** to specific files in a private S3 bucket  
- **Control permissions** without changing bucket policies  
- **Limit access duration** (URL expires after a set time)  
- **Secure file uploads and downloads**  

---

## **🛠️ Types of Pre-Signed URLs**  

1️⃣ **GET Object (Download)**  
   - Allows users to **download** a file from the private S3 bucket  
   - Example: Giving a customer access to a specific PDF or image for a limited time  

2️⃣ **PUT Object (Upload)**  
   - Allows users to **upload** a file **directly to S3** without giving them full S3 access  
   - Example: Users can upload profile pictures or documents without exposing S3 credentials  

---

💡 **Key Points:**  
✔ The **S3 bucket remains private**  
✔ Pre-signed URLs are **temporary** and expire after a defined period  
✔ Used for **both downloading (GET) and uploading (PUT) objects securely**  

🚀 **Pre-signed URLs provide a secure and efficient way to handle file access in AWS S3!**