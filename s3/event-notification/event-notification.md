### **📢 AWS S3 Event Notification: What & Why?**  

AWS **S3 Event Notifications** allow you to get notified when something happens in an S3 bucket (e.g., a file is uploaded, deleted, or modified). You can configure it to trigger **Lambda functions, SQS queues, or SNS topics** when an event occurs.  

---

### **🛠️ How Does It Work?**
1️⃣ **An event happens** in your S3 bucket (e.g., a new file is uploaded).  
2️⃣ **S3 detects the event** and sends a notification.  
3️⃣ The notification **triggers a target service**, such as:  
   - 🖥️ **AWS Lambda** – Process the file automatically.  
   - 📩 **Amazon SNS** – Send an email or SMS alert.  
   - 📬 **Amazon SQS** – Queue the event for later processing.  

---

### **🎯 Common Event Types**
✅ `s3:ObjectCreated:*` – A file is uploaded  
✅ `s3:ObjectRemoved:*` – A file is deleted  
✅ `s3:ObjectRestore:*` – A file is restored from Glacier  
✅ `s3:Replication:*` – Object is replicated  

---

### **🚀 Example Use Case**
- **Image Processing**: When a user uploads a profile picture, S3 triggers **a Lambda function** to resize and store different image versions.  
- **Data Pipeline**: When a CSV file is uploaded, S3 notifies **SQS**, and a backend service processes the data.  
- **Security Alerts**: If an unauthorized file is added, S3 notifies **SNS**, sending an email to the security team.  

---

### **🛠️ How to Enable S3 Event Notifications?**
1️⃣ **Go to AWS S3 Console** → Select your bucket  
2️⃣ Click **Properties** → Scroll to **Event Notifications**  
3️⃣ Click **Create Event Notification**  
4️⃣ **Choose an event type** (e.g., Object Created)  
5️⃣ **Select a destination** (Lambda, SNS, or SQS)  
6️⃣ Save and deploy! 🚀  

💡 **S3 Event Notifications help automate workflows and improve efficiency!**