async function handleFormSubmit(event) {
  console.log(event);

  event.preventDefault(); // Prevent the form from being submitted to a server

  const form = event.target;
  const formData = new FormData(form);
  const inputValues = {};

  // Loop through FormData entries and add them to the inputValues object
  for (const [name, value] of formData.entries()) {
    inputValues[name] = value;
  }

  console.log(inputValues);
  alert(JSON.stringify(inputValues)); // Show extracted values

  // Send a POST request
  const API_URL = 'https://677e720a0fceb9f1aeb7.appwrite.global/';
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Adjust headers as needed
        // Add Authorization header if required
      },
      body: JSON.stringify(inputValues),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBody = await response.json();
    console.log('Success:', responseBody);
    alert('Form submitted successfully! Response: ' + JSON.stringify(responseBody));
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit the form. Check the console for details.');
  }
}

// Attach the function to a form submission event
document.getElementById('myForm').addEventListener('submit', handleFormSubmit);
