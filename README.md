# ClubSphere

Welcome to **ClubSphere**, a full-featured platform for managing clubs and events, designed specifically to assist students and club owners. This application revolutionizes the way club owners inform students about upcoming events. Instead of the traditional method where organizers had to go to each class to announce events, the ClubSphere website allows club owners to easily register their clubs and add events, ensuring that students stay informed and engaged.

## Table of Contents
- [Demo](#demo)
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Authentication](#authentication)
- [Search Functionality](#search-functionality)
- [Contributing](#contributing)








## Demo
[Watch the demo video here](https://github.com/Dharshansk16/Club-Sphere/assets/142658700/d14c733b-490b-4151-a82a-568fe513a57a)

## Project Overview
**ClubSphere** is designed to streamline the communication between club owners and students, making it easier to disseminate information about events. Club owners can register their clubs on the platform and add details about upcoming events, including the date, venue, and a registration link. Students can effortlessly view and register for events, ensuring they never miss out. The platform also features a robust search functionality that allows students to sort events based on their favorite clubs.

## Features
- **User Authentication:** Register, login, and manage user profiles with JWT authentication.
- **Club Management:** Create and edit clubs.
- **Event Management:** Organize and manage events.
- **Event Registration:** Students can register for events directly through provided links.
- **Event Details:** Access information on the date and venue of each event.
- **Search Functionality:** Sort and search for events based on clubs.
- **Responsive Design:** Optimized for all devices.

## Tech Stack
- **Frontend:** React, Material-UI, Tailwind CSS, React Router v6
- **Backend:** Django, Django Rest Framework
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** SQLite (for development), PostgreSQL (for production)

## Installation
### Prerequisites
- Python 3.x
- Node.js and npm
- Django
- React

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/clubsphere.git
   cd clubsphere
   
2. Set up a virtual environment:
   ```bash
   python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
4. Run database migrations:
   ```bash
   python manage.py migrate
5. Start the backend server:
   ```bash
   python manage.py runserver

 **Frontend Setup**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
2. Install frontend dependencies:
   ```bash
   npm install
3. Start the frontend server:
   ```bash
   npm start

## Usage
1. Open your browser and navigate to `http://localhost:5173/` to access the application.
2. Register a new user or login with existing credentials.(create a superuser)
3. Create and manage your clubs and events.

## Screenshots
### Home Page
The Home Page displays all the clubs registered on the platform, providing an overview for students to explore various clubs.

![Home Page](https://github.com/Dharshansk16/Club-Sphere/assets/142658700/3332ad64-09e6-474b-ae7f-beabfa2a1efa)

### Login Page
The Login Page allows club owners and students to securely log into their accounts using their credentials.

![Login Page](https://github.com/Dharshansk16/Club-Sphere/assets/142658700/159c5baf-e8ab-4fbe-9088-9dfd938f3b06)

### Register Page
The Register Page facilitates new club registration by capturing essential details such as club name and url.

![Register Page](https://github.com/Dharshansk16/Club-Sphere/assets/142658700/85b94def-239c-4674-979e-302958c1b4f9)

### Edit Page
The Edit Page enables club owners to update the details of their clubs and events, ensuring the information remains accurate and current.

### Events Page
The Events Page showcases all upcoming events, providing detailed information about the date, venue, and registration links for students.

![Event Page](https://github.com/Dharshansk16/Club-Sphere/assets/142658700/f0ca721a-c8ff-482f-ad35-44252af2559c)

### Add Event page

![Add Event Page](https://github.com/Dharshansk16/Club-Sphere/assets/142658700/31f8c92e-7082-4fcd-9742-4ae99c5768ab)

### MyClub Page
The My club Page presents information about the club and lists the upcoming events for the particular club, allowing club owners to manage their profile and event details.


![MyClub Page](https://github.com/Dharshansk16/Club-Sphere/assets/142658700/30baf2ff-d25a-41fc-92b1-3e70b835f67b)


## Authentication
Authentication is handled using JWT. Users need to register and log in to access the full features of the application. Upon successful login, a JWT token is generated and stored client-side to authenticate further requests.

## Search Functionality
The application includes a robust search functionality that allows users to search for clubs and events. The search bar is available on the home page  and event page and dynamically updates the results as you type.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.























