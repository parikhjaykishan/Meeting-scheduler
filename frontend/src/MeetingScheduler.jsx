import React, { useState } from 'react';
import axios from 'axios';

const MeetingScheduler = ({ handleSuggestedTime }) => {
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');
    const [predictedDuration, setPredictedDuration] = useState(null);
    const [error, setError] = useState('');

    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

    const predictMeetingDuration = async () => {
        try {
            const response = await axios.post(`${backendUrl}/predict_meeting_duration`, {
                day_of_week: dayOfWeek,
                time_of_day: timeOfDay
            });
            setPredictedDuration(response.data.predicted_duration);
            setError('');

            // Calculate suggested meeting end time
            if (predictedDuration !== null && predictedDuration !== undefined) {
                const startTime = new Date(`2024-06-29T${timeOfDay}`);
                const endTime = new Date(startTime.getTime() + predictedDuration * 60000); // Convert minutes to milliseconds
                handleSuggestedTime(startTime, endTime);
            }
        } catch (error) {
            console.error('Error predicting meeting duration:', error);
            setError('Failed to predict meeting duration. Please try again.');
        }
    };

    return (
        <div className="meeting-scheduler">
            <h2>Meeting Scheduler</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Day of the week (1-7)"
                    value={dayOfWeek}
                    onChange={(e) => setDayOfWeek(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Time of day (HH:mm)"
                    value={timeOfDay}
                    onChange={(e) => setTimeOfDay(e.target.value)}
                    className="input-field"
                />
                <button onClick={predictMeetingDuration} className="btn">Predict Duration</button>
            </div>
            {error && <p className="error">{error}</p>}
            {predictedDuration !== null && (
                <p className="result">Predicted optimal meeting duration: {predictedDuration} minutes</p>
            )}
        </div>
    );
};

export default MeetingScheduler;
