
---
### What is SSH?  
SSH (Secure Shell) is like a **remote control** for another computer. It lets you securely connect to another computer over the internet or a network and control it as if you were sitting in front of it.  

### How does it work?  
1. **You connect to a remote computer**  
   - You type a command like:  
     ```bash
     ssh user@remote-computer
     ```
   - "user" is your login name on that computer.  
   - "remote-computer" is the IP address or hostname of the computer you want to access.  

2. **Secure connection is established**  
   - Your computer and the remote computer **exchange keys** (like a secret handshake) to ensure the connection is safe.  

3. **You can control the remote computer**  
   - Once connected, you can run commands, manage files, and even start programs on the remote machine—just like you would on your own computer.  

### Why use SSH?  
- **Security:** It encrypts data so no one can snoop on your session.  
- **Remote Access:** Manage servers and devices from anywhere.  
- **File Transfers:** Copy files between computers securely (using `scp` or `rsync`).  

### **Connect to EC2 via SSH** 🔥🔥🔥🔥
Use the **Elastic IP** assigned to your instance to connect via SSH:  

```sh
ssh -i your-key.pem ec2-user@your-elastic-ip
```

🔹 **Replace** `your-key.pem` with your actual **private key file**.  
🔹 **Replace** `your-elastic-ip` with your **Elastic IP address**.  


Now you are in : ***ubuntu@ip-172-31-14-18:~***

#### If you perform any action in the current terminal that changes reflects to the actual instance of ec2 

 Also if you stop the instance. ***It also closed the connection of ssh terminal***

 ```jsx 

Broadcast message from root@ip-172-31-14-18 (Mon 2025-03-17 06:05:54 UTC):

The system will power off now!

Connection to 13.234.188.136 closed by remote host.
Connection to 13.234.188.136 closed.

 ```



---
