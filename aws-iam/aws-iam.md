### **👤 AWS Root User vs IAM User – What's the Difference?**  

When setting up AWS, you have **two types of users**:  

| Feature            | **Root User** 👑 | **IAM User** 👥 |
|-------------------|----------------|---------------|
| **Who is it?** | The **main owner** of the AWS account. | A **user created** inside AWS with permissions. |
| **Created by?** | AWS automatically creates it when you sign up. | You (Root User) create IAM users manually. |
| **Permissions?** | **Full access** to everything (dangerous!). | **Limited access** (based on policies). |
| **Used for?** | **Initial setup, billing, account management**. | **Daily tasks like deploying apps, managing services**. |
| **Can be deleted?** | ❌ No | ✅ Yes |
| **Best Practice?** | **Do not use it daily!** | ✅ Use IAM users instead. |

---

## **🚀 AWS Root User – What Can It Do?**  
The **root user** has **unlimited control** over the AWS account. It can:  
✅ Manage **billing & payments** 💰  
✅ Change **account settings** 🔧  
✅ Close the AWS account ❌  
✅ Create & delete IAM users 👥  
✅ Manage security credentials 🔑  

💡 **Best Practice**: **Do NOT use the root user for daily tasks.** Instead, create **IAM users** with limited permissions.  

---

## **👥 AWS IAM User – What Is It?**  
An **IAM (Identity and Access Management) user** is a **secure way to use AWS without full control**.  

✅ **Each IAM user gets its own credentials (Access Key & Secret Key).**  
✅ **Permissions are controlled with IAM Policies.**  
✅ **IAM users can be grouped into IAM Roles for better security.**  

---
### **🚀 Creating an IAM User with AWS Management Console Access**  

Guide to creating an **IAM user** with both **programmatic access** (for CLI) and **AWS Management Console access** (for web login).  

---

## **📌 Steps to Create an IAM User with Console Access**  

### **🔹 Step 1: Log in to AWS as Root User**  
1. Go to [AWS Management Console](https://aws.amazon.com/console/).  
2. Log in with your **root user** credentials.  

---

### **🔹 Step 2: Navigate to IAM (Identity and Access Management)**  
1. In the AWS search bar, type **IAM** and click on it.  
2. Click **Users** in the left sidebar.  
3. Click **Create user**.  

---

### **🔹 Step 3: Provide User Access to the AWS Console**  
1. **Check** the option **"Provide user access to the AWS Management Console"**.  
2. Choose **"I want to create an IAM user"**.  
3. **Select "Custom password"** and enter a password (e.g., `sub-user01`).  
4. Click **Show password** to verify it.  
5. **Check the box** for **"Users must create a new password at next sign-in"** (for security).  
6. Click **Next**.  

---

### **🔹 Step 4: Assign Permissions**  
1. Select **"Attach policies directly"**.  
2. Search for and select **AmazonS3FullAccess** (for full S3 bucket access).  
3. Click **Next**.  

---

### **🔹 Step 5: Review and Create the User**  
1. **Review all details**.  
2. Click **Create user**.  
3. You will see a **success message** with the IAM user's login details.  

---

### **🔹 Step 6: Get the IAM User Login URL**  
Once the user is created, AWS provides a **Console Sign-in URL**:  

🔗 **Console Sign-in URL:**  
`https://pavitar-singh-dev.signin.aws.amazon.com/console`  

📌 **IAM User Credentials:**  
- **User Name:** `sub-user`  
- **Password:** `************` (must be changed at first login)  

---

### **✅ Next Steps**  
🔹 The **IAM user** can now log in using the provided sign-in URL.  
🔹 The first time they log in, they will need to **change their password**.  
🔹 You can also provide **programmatic access** using **AWS Access Keys**.  

---

### **🔐 Best Security Practices**  
✔️ **Do not share passwords directly—use IAM roles instead.**  
✔️ **Enable Multi-Factor Authentication (MFA) for the IAM user.**  
✔️ **Use least privilege access (only necessary permissions).**  

Would you like a guide on setting up **IAM roles and permissions**? 😊  

✅ Now, **use the IAM user instead of the root user** for deploying AWS services!  

---

## **💡 Why Shouldn't You Use the Root User?**  
🚫 If the **root account is hacked, the entire AWS account is compromised!**  
✅ IAM users **limit access** and **reduce security risks**.  

---

### **🔐 Best Practices for AWS Security**  
✔️ **Use IAM users for daily tasks, not the root user.**  
✔️ **Enable Multi-Factor Authentication (MFA) on the root user.**  
✔️ **Use IAM Roles for permissions instead of sharing access keys.**  
✔️ **Rotate access keys regularly for security.**  

---

### **🎯 Final Summary**
- **Root User** → Full control, only for account management.  
- **IAM User** → Limited control, used for daily tasks.  
- **Best Practice** → Use IAM users with specific permissions instead of the root user.  

---
