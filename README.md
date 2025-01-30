### Database Setup Guide for KAM Lead Management System

This guide provides step-by-step instructions to set up the MySQL database, configure the backend, and run the frontend for the **KAM Lead Management System**.

---

### Step 1: Install MySQL Workbench CE
1. Download and install **MySQL Workbench CE** from the official website:
   [MySQL Workbench Download](https://dev.mysql.com/downloads/workbench/).
2. Follow the installation instructions for your operating system.

---

### Step 2: Create a Database Connection
1. Open **MySQL Workbench CE**.
2. Click on the **"+"** icon next to "MySQL Connections" to create a new connection.
3. Configure the connection with the following details:
   - **Connection Name**: `KAM_LEAD_MANAGEMENT`
   - **Hostname**: `localhost`
   - **Username**: `root`
   - **Password**: `Kam123456` (ensure this matches the password in your backend configuration).
4. Click **Test Connection** to verify the connection. If successful, click **OK** to save.

---

### Step 3: Create the Database
1. Open the newly created connection (`KAM_LEAD_MANAGEMENT`).
2. In the query editor, run the following SQL commands to create and use the database:
   ```sql
   CREATE DATABASE kam_lead_management;
   USE kam_lead_management;
   ```
3. Verify that the database is created by checking the **Schemas** section in MySQL Workbench.

---

### Step 4: Configure Backend
1. Ensure the backend is configured to connect to the MySQL database. Update the configuration file (e.g., `config.js` or `env` file) with the following details:
   ```javascript
   module.exports = {
     HOST: 'localhost',
     USER: 'root',
     PASSWORD: 'Kam123456',
     DB: 'kam_lead_management',
     dialect: 'mysql',
   };
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. The backend will automatically create the required tables in the `kam_lead_management` database.

---

### Step 5: Set Up Frontend
1. Navigate to the frontend directory.
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```
4. The frontend application will launch in your default browser.

---

### Additional Notes:
- **Database Password**: Ensure the password (`Kam123456`) is securely stored and matches the configuration in both MySQL Workbench and the backend. Please refer this document for setting the password in the DB https://ultahost.com/knowledge-base/change-mysql-workbench-password/
- **Environment Variables**: For production, consider using environment variables to store sensitive information like database credentials.
- **Database Backups**: Regularly back up the `kam_lead_management` database to prevent data loss.

---

### Troubleshooting:
- **Connection Issues**: Verify that MySQL Server is running and the credentials are correct.
- **Dependency Errors**: Ensure you have the correct versions of Node.js and npm installed. Run `npm install` to resolve missing dependencies.
- **Table Creation Errors**: Check the backend logs for any errors during table creation.

---

### **Features of the KAM Lead Management System**

The **KAM Lead Management System** has been designed to provide seamless lead management, user interaction, and task handling through an intuitive interface and robust backend. Below are the core features with detailed explanations and key functionalities:

---

### **1. Interactive and Self-Explanatory Home Page**  
The **Home Page** serves as the initial touchpoint for users, offering a clean, simple, and interactive interface. It is **self-explanatory**, making it easy for users to navigate through the application without confusion. The page is designed to enhance user engagement and provide an intuitive flow for accessing various functionalities of the system.  
**Key Points**:
- User-friendly layout.
- Quick access to all major features.
- Visually appealing design for a better user experience.  
![KAM finalised2288254](https://github.com/user-attachments/assets/6cb92560-8ae5-4fbe-bee7-2c85b6ddfbdd)

---

### **2. Interactive User Authentication and Authorization Using REST APIs**  
This feature allows for **secure user authentication** and **authorization**. Users can easily register, log in, and gain access , which helps ensure that the right users have access to the correct data and functionalities. The use of **REST APIs** ensures smooth communication between the frontend and backend, making the system more robust and scalable.  
**Key Points**:
- **User Registration/Login** functionality.
- Seamless interaction with the backend via REST APIs for authentication and authorization.  
![image](https://github.com/user-attachments/assets/cf3d0648-f5db-46c4-be80-3c5dde536084)  
![image](https://github.com/user-attachments/assets/62d99034-d27f-4648-928b-9b96411a0a3d)

---

### **3. Functionality for Adding Leads**  
The system allows users to easily **add leads** to the platform. This feature enables the sales team or key account managers (KAMs) to **record and track lead information** such as names, contact details, multiple point of contacts and relevant notes. The user interface makes the process intuitive and quick.  
**Key Points**:
- Easy-to-use **lead input forms**.
- Ability to add detailed lead information for better tracking.
- Direct integration with other system features (CRUD operations).  
![image](https://github.com/user-attachments/assets/0fc9b96b-7ee5-4770-a724-cfc10fea4c8d)

---

### **4. Tracking All Leads with CRUD Operations**  
This feature ensures that users can manage the entire lead lifecycle, from **creation** to **update**, **viewing**, and **deletion**. The system provides **full CRUD (Create, Read, Update, Delete) operations**, allowing users to track and manage leads efficiently.  
**Key Points**:
- **Full CRUD functionality** for leads.
- Enables real-time updates and changes to lead data.
- Provides a central view for managing all leads.  
![image](https://github.com/user-attachments/assets/1fbe7f6a-3efb-45bd-a8a5-c77dbec62c7e)

---

### **5. Interaction Tracking**  
Interaction tracking allows users to **log and view interactions** with leads or customers, such as calls, emails, meetings, notes etc. This helps ensure that no communication is missed and allows users to maintain an accurate history of all actions taken with a lead.  
**Key Points**:
- Tracks **communication history** with each lead.
- Users can **record notes** and updates on each interaction.
- Provides detailed insights into **lead progress** and activity.  
![image](https://github.com/user-attachments/assets/c98de22c-3174-4899-87c5-ba8f0d71e5f3)

---

### **6. Task Management**  
The **Task Management** feature enables users to **getupdate , add task and Delete** related to each lead or customer. This ensures that all actions are properly planned and executed in a timely manner, improving productivity and follow-through.  
**Key Points**:
- **Task creation and assignment** functionality.
- **Due dates** and **status tracking** for each task.
- Helps in **organizing the workflow** for KAMs and other team members.  
![image](https://github.com/user-attachments/assets/264d202d-41b8-47bf-a2a9-bbfb8dad150e)

---

### **Conclusion**
This system offers a **comprehensive solution** for managing leads, tracking interactions, and efficiently handling tasks related to key accounts. With features like user authentication, lead management, and task tracking, it aims to enhance **productivity, collaboration**, and **efficiency** within the team.
