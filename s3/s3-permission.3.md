### **🚀 Implementation Guide: Creating an IAM Group with S3 Full Access & Adding a Sub-User**  

This guide will walk through the steps to:  
✅ **Create an IAM group with S3FullAccess**  
✅ **Add a sub-user to that group**  
✅ **Log in as the sub-user and create an S3 bucket**  

---

## **🛠️ Step 1: Create an IAM Group with S3 Full Access**  

1️⃣ **Go to AWS IAM:**  
   - Log in to the **AWS Management Console**.  
   - In the search bar, type **IAM** and select **IAM (Identity & Access Management)**.  

2️⃣ **Create a New Group:**  
   - Click **User groups** in the left panel.  
   - Click **Create group**.  
   - Enter **Group Name** → `S3Admins`  
   - Click **Next**.  

3️⃣ **Attach S3 Full Access Policy:**  
   - In the **Attach permissions policies** section, search for:  
     - **AmazonS3FullAccess** ✅  
   - Select it and click **Next**.  
   - Click **Create group**.  

---

## **👤 Step 2: Create an IAM User & Add to the Group**  

1️⃣ **Go to IAM Users**  
   - Click **Users** in the IAM Dashboard.  
   - Click **Add users**.  

2️⃣ **Set Up the New User:**  
   - Enter **User Name** → `sub-user01`  
   - Click **Provide user access to the AWS Management Console** ✅  
   - Select **Custom password** and enter a password.  
   - (Optional) Check **Users must create a new password at next sign-in**.  
   - Click **Next**.  

3️⃣ **Assign the User to a Group:**  
   - Select the previously created group **S3Admins** ✅  
   - Click **Next** and then **Create user**.  

---

## **🔑 Step 3: Log in as the IAM Sub-User**  

1️⃣ **Copy the IAM Sign-In URL:**  
   - Go to **IAM → Dashboard**  
   - Look for **IAM users sign-in link** (e.g., `https://your-account-id.signin.aws.amazon.com/console`)  

2️⃣ **Log In as the Sub-User:**  
   - Open the **IAM Sign-In URL** in a browser.  
   - Enter:  
     - **User Name:** `sub-user01`  
     - **Password:** (the one you set earlier)  

---

## **📦 Step 4: Create an S3 Bucket as the Sub-User**  

1️⃣ **Search for "S3"** in the AWS Console.  
2️⃣ Click **S3 → Create bucket**.  
3️⃣ Enter a **Bucket Name** (e.g., `my-subuser-bucket`).  
4️⃣ Choose a **Region** (e.g., `us-east-1`).  
5️⃣ (Optional) Adjust **Public Access settings** based on your needs.  
6️⃣ Click **Create bucket**.  

✅ **Success! The sub-user now has full access to S3 and can create buckets.** 🚀