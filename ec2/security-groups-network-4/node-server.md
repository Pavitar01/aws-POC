### **🚀 Creating a Node.js App and Deploying It to an EC2 Instance Using SCP**  

We'll create a simple **Node.js app**, upload it to an **EC2 instance** using `scp`, and run it.

---

## **🛠 Step 1: Create a Simple Node.js App Locally**
1️⃣ **Initialize a New Project**  
```sh
mkdir my-node-app && cd my-node-app
npm init -y
```
2️⃣ **Install Express.js**  
```sh
npm install express
```
3️⃣ **Create `index.js` File**  
```js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js App on EC2!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

4️⃣ **Test Locally**
```sh
node index.js
```
- Open `http://localhost:3000` in your browser to confirm it’s working.

---

## **🛠 Step 2: Upload the App to EC2 Using SCP**
### **1️⃣ Find Your EC2 Public IP**
- Go to **AWS EC2 Dashboard**  
- Find your **Instance Public IP** (e.g., `18.221.34.56`)

### **2️⃣ Use SCP to Transfer Files**
```sh
scp -i my-key.pem -r my-node-app ec2-user@18.221.34.56:~/
```
- `-i my-key.pem`: Your **private key**  
- `-r my-node-app`: Upload the whole **project folder**  
- `ec2-user@18.221.34.56:~/`: Copy to the **home directory** of the instance  

---

## **🛠 Step 3: Set Up Node.js on EC2**
1️⃣ **Connect to EC2 via SSH**  
```sh
ssh -i my-key.pem ec2-user@18.221.34.56
```

2️⃣ **Install Node.js & npm**  
```sh
sudo yum update -y
sudo yum install -y nodejs npm
```
(For Ubuntu use `sudo apt install nodejs npm` instead.)

3️⃣ **Navigate to the Uploaded Project**  
```sh
cd my-node-app
```

4️⃣ **Install Dependencies**  
```sh
npm install
```

5️⃣ **Run the App**  
```sh
node index.js
```
Your app should now be running! 🎉  

---

## **🛠 Step 4: Run the Node.js App in the Background**
By default, when you close SSH, the app stops. To keep it running:
```sh
nohup node index.js > output.log 2>&1 &
```
- `nohup`: Keeps the process running after logout  
- `output.log`: Saves logs for debugging  

---

## **🛠 Step 5: Allow External Traffic (Security Group)**
1. Go to **AWS EC2 Dashboard**  
2. Click **Security Groups** → Select your **EC2 security group**  
3. Add **Inbound Rule** for:
   - **Type:** HTTP  
   - **Port:** `3000`  
   - **Source:** `0.0.0.0/0` (for public access)  

---

## **🛠 Step 6: Access the App from a Browser**
- Open `http://<your-ec2-public-ip>:3000`  
- You should see: **"Hello from Node.js App on EC2!"**  

---
