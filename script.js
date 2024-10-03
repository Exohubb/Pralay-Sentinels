document.addEventListener("DOMContentLoaded", function() {
    let dataLines = [];
    let currentIndex = 0;
    
    // Define thresholds and weights for flood probability calculation
    const thresholds = [10, 8, 5, 2.5, 200];  // Thresholds for [Temperature, Water Level, Seismic, Inclinometer, Piezometer]
    const weights = [0.1, 0.4, 0.2, 0.2, 0.1];    // Weights for each sensor

    function fetchData() {
        fetch('rnnn.txt') // Adjust the path if necessary
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                dataLines = data.split('\n').map(line => line.trim()).filter(line => line);
                updateFields();
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function calculateFloodProbability(sensorData) {
        let score = 0;
        
        // Calculate the normalized score based on thresholds and weights
        for (let i = 0; i < sensorData.length; i++) {
            let normalizedValue = sensorData[i] / thresholds[i];  // Normalize the sensor value based on the threshold
            score += normalizedValue * weights[i];  // Add the weighted value to the total score
        }

        // Calculate probability and cap it at 1 (100%)
        let probability = Math.min(score / weights.reduce((a, b) => a + b, 0), 1);  
        return probability;
    }

    function updateFields() {
        if (dataLines.length === 0) return;
        
        // Determine the index of the next data chunk
        const index = currentIndex * 5;
        if (index + 5 <= dataLines.length) {
            // Extract the current sensor data
            const currentData = dataLines.slice(index, index + 5).map(Number);  // Convert to numbers

            // Calculate the flood probability
            const floodProbability = calculateFloodProbability(currentData);

            // Update fields with current data and flood probability
            document.getElementById('sensor-data').innerHTML = `
                <strong>Temperature:</strong> ${currentData[0] || 'No data'} °C<br><br>
                <strong>Water Level:</strong> ${currentData[1] || 'No data'} m<br><br>
                <strong>Seismic:</strong> ${currentData[2] || 'No data'}<br><br>
                <strong>Inclinometer:</strong> ${currentData[3] || 'No data'} deg<br><br>
                <strong>Piezometer:</strong> ${currentData[4] || 'No data'} kPa<br><br>
                <strong>Current Flood Probability:</strong> ${(floodProbability * 100).toFixed(2)}%<br>
            `;
            
            // Move to the next chunk of data
            currentIndex = (currentIndex + 1) % Math.ceil(dataLines.length / 5);
        } else {
            console.log('Not enough data available.');
        }
    }

    // Fetch and update data every 2 seconds
    setInterval(fetchData, 2000);

    // Initial fetch
    fetchData();
});


























// document.addEventListener("DOMContentLoaded", function() {
//     const sensorData = {
//         temperature: 15.6,
//         inclination: 6,
//         piezometer: 4,
//         sizmic: 8,
//         waterLevel: 3.2,

//         floodProbability: 45,
//     };

//     const currentStatus = document.getElementById('sensor-data');
//     currentStatus.innerHTML = `
//         <strong>Temperature:</strong> ${sensorData.temperature} °C<br><br>
//         <strong>Water Level:</strong> ${sensorData.waterLevel} m<br><br>
//         <strong>inclination:</strong> ${sensorData.inclination} m<br><br>
//         <strong>piezometer:</strong> ${sensorData.piezometer} m<br><br>
//         <strong>sizmic:</strong> ${sensorData.sizmic} m<br><br>
//         <strong>Flood Probability:</strong> ${sensorData.floodProbability} %
//     `;
// });

// function fetchData() {
//     fetch('path/to/your/data.txt')
//         .then(response => response.text())
//         .then(data => {
//             const lines = data.split('\n'); // Assuming each line corresponds to a field
//             document.getElementById('field1').textContent = lines[0] || 'No data';
//             document.getElementById('field2').textContent = lines[1] || 'No data';
//             document.getElementById('field3').textContent = lines[2] || 'No data';
//             document.getElementById('field4').textContent = lines[3] || 'No data';
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }

// // Fetch and update every 2 seconds
// setInterval(fetchData, 2000);

