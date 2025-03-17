When you stop and restart an EC2 instance, the **public IP changes**. To have a **static IP**, we need to assign an **Elastic IP (EIP)**. Here’s how you can do it:  

---

### **Steps to Allocate and Attach an Elastic IP in AWS EC2**
1️⃣ **Go to AWS EC2 Dashboard**  
- In the **AWS Console**, navigate to **EC2**.  
- On the left menu, click **Elastic IPs** under **Network & Security**.  

2️⃣ **Allocate a New Elastic IP**  
- Click on **Allocate Elastic IP address**.  
- Select **Amazon’s pool of IPv4 addresses**.  
- Click **Allocate** (you will now see a new Elastic IP).  

3️⃣ **Associate the Elastic IP with Your EC2 Instance**  
- Select the newly created **Elastic IP**.  
- Click **Actions → Associate Elastic IP address**.  
- Select:  
  - **Instance**: Choose your running EC2 instance.  
  - **Private IP**: Leave default.  
- Click **Associate**.  

4️⃣ **Verify Your Static IP**  
- Go to **EC2 Instances** → Select your instance.  
- Your **Public IPv4** should now show the **Elastic IP**.  
- Even if you **restart** the instance, the **IP won’t change**. 🎯  

---

### **Important Notes**
✅ **Elastic IPs are free as long as they are associated with a running instance**.  
🚨 **If you don’t use the Elastic IP, AWS charges you for it**. So, if not needed, **release it** to avoid extra costs.  

Would you like help setting up a **domain** (e.g., `yourdomain.com`) with this Elastic IP? 🌍