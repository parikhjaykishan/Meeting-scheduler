import numpy as np
from sklearn.tree import DecisionTreeRegressor
import joblib

# Sample training data: [day_of_week, time_of_day] -> meeting_duration
X = np.array([
    [1, 9], [1, 10], [1, 11], [2, 9], [2, 10], [2, 11],
    [3, 9], [3, 10], [3, 11], [4, 9], [4, 10], [4, 11],
    [5, 9], [5, 10], [5, 11], [6, 9], [6, 10], [6, 11],
    [7, 9], [7, 10], [7, 11]
])
y = np.array([
    30, 60, 90, 30, 60, 90, 30, 60, 90, 30, 60, 90,
    30, 60, 90, 30, 60, 90, 30, 60, 90
])

# Create and train the model
model = DecisionTreeRegressor()
model.fit(X, y)

# Serialize the model
joblib.dump(model, 'decision_tree_model.pkl')
print("Model trained and saved as 'decision_tree_model.pkl'")
