### **🛠 Understanding Network Interface Card (NIC) in Simple Terms**  

A **Network Interface Card (NIC)** (also called **Elastic Network Interface (ENI)** in AWS) is like a **virtual network port** that connects an EC2 instance to a network.  

Think of it as a **SIM card for a phone**:  
- It gives your EC2 **an identity on the network** (IP address, MAC address).  
- Without it, your EC2 **can’t communicate** with the internet or other servers.  

---

### **🔹 Key Points About ENI (NIC)**
✔️ Each EC2 instance has **at least one NIC (ENI)**.  
✔️ You can **add more NICs** to an instance for multiple network connections.  
✔️ Each NIC has:
   - **A private IP address** (used inside AWS).  
   - **An optional public IP** (for internet access).  
   - **Security groups** (firewall rules).  
✔️ If you **stop or restart the instance**, the ENI **remains the same** (unlike dynamic public IPs).  

---

### **🔹 Why Use Multiple ENIs?**
✅ **Separate traffic** (e.g., one ENI for public access, one for internal communication).  
✅ **High availability** (failover between ENIs).  
✅ **Move ENIs between instances** (keeps the same IP even if the instance changes).  

---

### **🔹 How to Assign a Fixed Public IP (Elastic IP) to an ENI?**
1. Go to **AWS EC2 Dashboard** → **Elastic IPs**  
2. Click **Allocate Elastic IP**  
3. Attach it to your **ENI (NIC)**  
4. Now, even if your instance restarts, the **public IP remains the same!**  

---

In short, **ENI is what allows your EC2 to talk to the network**. It manages the **IP address, security, and connectivity** of your instance. 🚀