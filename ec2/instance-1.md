**Mumbai (ap-south-1)** is a good AWS region for users in India as it offers lower latency and better performance. Let's go step by step to **create a new EC2 instance** in the **Mumbai (ap-south-1) region**.

---

### **Step 1: Select the Mumbai Region**
1. Log in to your **AWS Management Console** → [AWS Console](https://aws.amazon.com/console/).  
2. On the top-right, click on the **Region dropdown**.  
3. Select **Asia Pacific (Mumbai) - ap-south-1**.

---

### **Step 2: Launch a New EC2 Instance**
1. Go to the **EC2 Dashboard** (`Services → EC2`).
2. Click on **Launch Instances**.
3. Enter an **Instance Name** (e.g., `My-Mumbai-Server`).

---

### **Step 3: Choose an Amazon Machine Image (AMI)**
- Select an **Amazon Linux 2023**, **Ubuntu 22.04**, or any OS you prefer.
- If unsure, go with **Amazon Linux 2023 (Free Tier Eligible)**.

---

### **Step 4: Choose an Instance Type**
- For general use, **t2.micro** (1 vCPU, 1GB RAM) is **Free Tier Eligible**.  
- For higher performance, consider **t3.small** or **t3.medium**.

---

### **Step 5: Configure Instance Settings**
- **Network**: Use the default **VPC** and select a suitable **subnet**.  
- **IAM Role**: (Optional) Attach an **IAM role** if needed for permissions.  

---

### **Step 6: Configure Storage**
- Default storage is **8GB (gp2 SSD)**. You can **increase if required**.  
- If using **Ubuntu**, set root volume to at least **10GB**.  

---

### **Step 7: Configure Security Group (Firewall)**
- Allow **SSH (22)** for remote access.  
- If hosting a website, allow **HTTP (80) and HTTPS (443)**.  
- To allow custom applications, open required ports (e.g., **3000** for Next.js).  

---

### **Step 8: Select Key Pair**
- Select an existing **Key Pair** or create a **new key pair** (for SSH access).  
- Download and **store the private key (.pem file) safely**.  

---

### **Step 9: Launch Instance**
- Click **Launch Instance**.
- Wait a few seconds, then check the **EC2 Dashboard** → **Instances**.

---

### **Step 10: Connect to the EC2 Instance**
1. Select your instance → Click **Connect**.  
2. Use SSH to connect:  
   ```sh
   ssh -i your-key.pem ec2-user@your-instance-public-ip
   ```
3. You're now inside your EC2 instance! 🚀  

---

### Please Aware 🚨🚨🚨🚨
- Always stop the instance when it is not is use.
- ***Now if you stop the instance; so the elastic ip is not in use so it may cause the billing so steps to dissociate and delete***.

### steps to dissociate elastic IP:
- First select the Elastic ip ( ***then click on actions and select dissociate*** and ***then release elastic ip*** ).

