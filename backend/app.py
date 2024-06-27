from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for your Flask app

# Load the serialized model
model = joblib.load('decision_tree_model.pkl')

@app.route('/predict_meeting_duration', methods=['POST'])
def predict_meeting_duration():
    data = request.get_json()
    day_of_week = int(data['day_of_week'])
    time_of_day = int(data['time_of_day'])

    # Predict optimal meeting duration
    input_data = np.array([[day_of_week, time_of_day]])
    predicted_duration = model.predict(input_data)[0]

    return jsonify({'predicted_duration': predicted_duration})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
