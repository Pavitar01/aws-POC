### **Creating a New Security Group in AWS EC2** 🚀

A **Security Group (SG)** in AWS acts as a **virtual firewall** that controls inbound and outbound traffic to **EC2 instances**.

---

### **🛠 Steps to Create a New Security Group:**
1️⃣ **Login to AWS Console**  
   - Go to **EC2 Dashboard**  
   - On the left side, click **Security Groups** (under "Network & Security").  

2️⃣ **Create a New Security Group**
   - Click **Create Security Group** button.  

3️⃣ **Configure the Security Group**
   - **Name** → Give a meaningful name (e.g., `my-sec-group`).  
   - **Description** → Add a description (e.g., `Security group for web server`).  
   - **VPC** → Choose the correct **VPC** where your EC2 instance is located.  

4️⃣ **Add Inbound Rules** (Control Incoming Traffic)  
   - Click **Add Rule**  
   - Example rules:  
     | Type | Protocol | Port | Source |
     |------|---------|------|--------|
     | SSH  | TCP     | 22   | Your IP (recommended) |
     | HTTP | TCP     | 80   | 0.0.0.0/0 (for public access) |
     | HTTPS | TCP     | 443  | 0.0.0.0/0 |

5️⃣ **Add Outbound Rules** (Control Outgoing Traffic)  
   - Default **Allow All Traffic (0.0.0.0/0)** is fine for most cases.  
   - If needed, restrict outbound traffic.  

6️⃣ **Create the Security Group**
   - Click **Create Security Group** ✅  

---

### **🔗 Attach the Security Group to an EC2 Instance**
Now that the security group is created, **attach it to an EC2 instance**:
1. Go to **EC2 Dashboard** → **Instances**  
2. Select the EC2 instance you want to modify.  
3. Click **Actions** → **Networking** → **Change Security Groups**.  
4. Select the **new security group (`my-sec-group`)** and save the changes.  

---

