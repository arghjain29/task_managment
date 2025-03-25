# 📝 Task Management Web App

A sleek and modern task management web application built using the MERN Stack (MongoDB, Express.js, React, Node.js). It provides an efficient way to manage tasks with features like creating, updating, deleting, and marking tasks as completed.

## 🚀 Features

- ✅ **Task Management**: Create, edit, delete, and mark tasks as completed.
- ✅ **Modern UI**: Clean and elegant design inspired by shadcn, built with Tailwind CSS.
- ✅ **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop.
- ✅ **Reusable Components**: Organized code structure for maintainability.
- ✅ **Lucide React Icons**: Used for beautiful and consistent icons.
- ✅ **RESTful API**: Backend built with Express.js and MongoDB.

## 🛠️ Tech Stack

### Frontend (React.js + Vite)

- ⚡ **React with Vite** (for fast development)
- 🎨 **Tailwind CSS** (for a modern, shadcn-inspired theme)
- 🔗 **Lucide React** (for icons)
- 🏗 **Reusable Component Structure**

### Backend (Node.js, Express.js, MongoDB)

- 🚀 **Node.js with Express.js**
- 📦 **MongoDB with Mongoose ORM**
- 🔒 **CORS & dotenv** (for security)
- 🏗 **Modular Code Structure** (for better maintainability)

## 🎯 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/arghjain29/task_managment
cd task-manager
```

### 2️⃣ Backend Setup

```sh
cd backend
npm install
```

#### Configure `.env`

Create a `.env` file inside `backend/` and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL= 'http://localhost:5173'
```

#### Run Backend Server

```sh
npm run dev
```

Backend will run on [http://localhost:5000](http://localhost:5000).

### 3️⃣ Frontend Setup

```sh
cd frontend
npm install
```

#### Configure `.env`

Create a `.env` file inside `frontend/` and add:

```env
VITE_API_URL = http://localhost:5000
```

#### Run Frontend

```sh
npm run dev
```

Frontend will be available at [http://localhost:5173](http://localhost:5173).

## 🔥 API Endpoints

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | `/tasks`       | Fetch all tasks             |
| POST   | `/tasks`       | Create a new task           |
| PUT    | `/tasks/:id`   | Update task (edit/mark completed) |
| DELETE | `/tasks/:id`   | Remove a task               |

## 🎨 UI & Design

### ✨ Modern Styling with Tailwind CSS

The UI is inspired by shadcn's clean aesthetics, without using shadcn components directly. It features:

- Minimalist UI with elegant spacing and typography
- Dark mode-like color palette for a modern look
- Smooth hover and transition effects for better UX

### 📱 Fully Responsive

- 🖥️ Desktop-friendly layout with grid-based task organization.
- 📱 Mobile-first design for easy task management on smaller screens.

### 🖌 Icons with Lucide React

Used Lucide React icons for a clean and lightweight design.

### 🔗 Organized Code Structure

- Components are modular and reusable for better maintainability.
- API calls and state management are structured efficiently.

## 🚀 Deployment

The App [Link]()

## 📸 Screenshots

### 🎨 Modern UI Preview

*(Add screenshots of your sleek UI here!)*

## 💡 Future Enhancements

- ✅ User authentication (Login/Register)
- ✅ Due dates & priority levels for tasks
- ✅ Drag-and-drop task reordering
- ✅ Dark mode toggle

## 🤝 Contributing

Want to improve this project? Feel free to fork and contribute!

1. Fork the repo.
2. Create a branch (`feature/your-feature`).
3. Commit changes (`git commit -m "Added new feature"`).
4. Push to branch (`git push origin feature/your-feature`).
5. Open a PR 🎉.

## 📄 License

This project is open-source and available under the MIT License.

## 🌟 Show Your Support

If you like this project, ⭐ Star the repo and share it with your friends! 🚀
