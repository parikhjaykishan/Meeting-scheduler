# Meeting Scheduler with AI-Powered Time Suggestions

This project integrates a frontend React application with a backend Flask server to suggest optimal meeting times based on selected start times using a machine learning model.

## Project Structure

meeting-scheduler/
│
├── backend/
│ ├── app.py # Flask backend application
│ ├── requirements.txt # Python dependencies
│ └── decision_tree_model.pkl # Pre-trained model
│
├── frontend/
│ ├── public/
│ │ ├── index.html # HTML template
│ │ └── ...
│ ├── src/
│ │ ├── App.jsx # Main React component
│ │ ├── App.css # Styles for App.jsx
│ │ └── index.js # React entry point
│ ├── package.json # Frontend dependencies and scripts
│ └── ...
│
├── README.md # Project documentation
└── ...


## Installation

### Backend (Flask)

1. Navigate to the `backend/` directory.
2. Create a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
3. Install Python dependencies using pip:
```sh
pip install -r requirements.txt
```
4. Ensure the decision_tree_model.pkl file is in the backend/ directory.

### Frontend (React)
1. Navigate to the frontend/ directory.
2. Install Node.js dependencies using npm:
```sh
npm install
```
## Running the Application
### Backend
Navigate to the backend/ directory.
Start the Flask server:
```sh
python app.py
```
Frontend
Navigate to the frontend/ directory.
Start the React development server:
```sh
npm start
```
## Usage
1. Open the frontend application in your browser at http://localhost:3000.
2. Select a start date and time for the meeting.
3. The application will predict the optimal meeting duration and suggest an end date/time.

### Backend API
Predict Meeting Duration
- Endpoint: POST /predict_meeting_duration
- Body:
```json
{
   "start_datetime": "2024-06-29T10:00:00Z"
}
```
- Response:
```json
{
   "predicted_duration": 60
}
```

[test.mov](..%2F..%2F..%2FDesktop%2Ftest.mov)