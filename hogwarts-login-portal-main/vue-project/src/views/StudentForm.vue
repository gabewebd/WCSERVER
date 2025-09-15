<template>
  <div class="magical-container single-column">
    <div class="form-header">
      <h1>Student Login</h1>
    </div>
    <div class="form-content">
      <form action="/getStudent" method="GET">
        <label for="studentID">Student ID:</label>
        <input type="text" id="studentID" name="studentID" placeholder="Enter your student ID" required />
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
        <label for="house">House:</label>
        <select id="house" name="house" required>
          <option value="">Select your house</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
        <input type="submit" value="Access Student Account">
      </form>
    </div>
    <nav style="margin-top: 30px;"><router-link to="/" class="magical-button">Return to Hogwarts Portal</router-link></nav>
  </div>
</template>