You're absolutely right! **Network ACL (NACL) is stateless**, meaning it does not remember past connections and checks every request again and again. On the other hand, **Security Groups (SG) are stateful**, meaning if an inbound request is allowed, the outbound response is **automatically allowed** without additional rules.  

---

# **Understanding Subnets and EC2 Communication Flow**
Now, let’s go deep into **subnets** and how two EC2 instances communicate.  

---

## **Scenario: Communication Between Two EC2 Instances**
Let’s assume we have two **EC2 instances** in the same **VPC** but in different **subnets**.

| Instance | Subnet | IP Address |
|----------|--------|------------|
| EC2-1 | **Public Subnet A** | 10.0.1.10 |
| EC2-2 | **Private Subnet B** | 10.0.2.20 |

**Goal:** EC2-1 (Public) wants to send a request to EC2-2 (Private).  

---

## **Step-by-Step Flow of Communication**

### **🟢 Step 1: EC2-1 Sends a Request to EC2-2**
- EC2-1 (10.0.1.10) sends a request to EC2-2 (10.0.2.20).  
- The request **leaves EC2-1** and reaches **NACL of Subnet A**.  

---

### **🟠 Step 2: Inbound Check at NACL (Subnet A)**
- **NACL (Subnet A) checks inbound rules** to see if traffic from EC2-1 is allowed.  
- If allowed ✅, the request **enters Subnet A**.  
- If denied ❌, the request is **blocked immediately**.  

---

### **🔵 Step 3: Outbound Check at NACL (Subnet A)**
- The request **leaves Subnet A** and now NACL (Subnet A) checks outbound rules.  
- If allowed ✅, the request **moves toward Subnet B**.  
- If denied ❌, the request is **blocked immediately**.  

---

### **🟣 Step 4: Inbound Check at NACL (Subnet B)**
- **NACL (Subnet B) checks inbound rules** to see if it should allow requests from Subnet A (10.0.1.10).  
- If allowed ✅, the request **enters Subnet B**.  
- If denied ❌, the request is **blocked immediately**.  

---

### **🟡 Step 5: Security Group (SG) Check on EC2-2**
- Now the request reaches **EC2-2**, but before it enters, the **Security Group (SG) of EC2-2 checks inbound rules**.  
- If EC2-2's **SG allows traffic from 10.0.1.10**, ✅ then the request is **accepted by EC2-2**.  
- If denied ❌, the request is **rejected at this stage**.  

---

### **🟤 Step 6: EC2-2 Sends a Response**
- Now EC2-2 processes the request and **sends a response back** to EC2-1.  
- But remember! **Security Groups are stateful**, so the response is **automatically allowed** by EC2-2's Security Group.  
- However, **NACL is stateless**, so it checks outbound rules.

---

### **🟢 Step 7: Outbound Check at NACL (Subnet B)**
- The response **leaves EC2-2** and **Subnet B’s NACL checks outbound rules**.  
- If the response is allowed ✅, it moves toward Subnet A.  
- If denied ❌, the response is **blocked immediately**.  

---

### **🟠 Step 8: Inbound Check at NACL (Subnet A)**
- The response **enters Subnet A**, but **Subnet A's NACL checks inbound rules** again.  
- If allowed ✅, the response moves toward EC2-1.  
- If denied ❌, the response is **blocked immediately**.  

---

### **🟣 Step 9: EC2-1 Receives the Response**
- The response **reaches EC2-1** without **any security group check**, because Security Groups are **stateful**.  
- **EC2-1 successfully receives the response! 🎯**  

---

## **Key Takeaways:**
🔹 **NACL is stateless** → It checks every request and response **separately**.  
🔹 **Security Groups are stateful** → If a request is allowed **inbound**, the response is **automatically allowed** outbound.  
🔹 **NACL works at the subnet level**, while **Security Groups work at the EC2 level**.  
🔹 **If NACL blocks a request, it never reaches Security Groups**.  
🔹 **If Security Groups block a request, EC2 never processes it**.  

---