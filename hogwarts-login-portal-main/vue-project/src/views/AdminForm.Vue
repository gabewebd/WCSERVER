<template>
  <div class="magical-container single-column">
    <div class="form-header">
      <h1>Admin Login</h1>
    </div>
    <div class="form-content">
      <form action="/getAdmin" method="GET">
        <label for="adminID">Admin ID:</label>
        <input type="text" id="adminID" name="adminID" placeholder="Enter your faculty ID" required />
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
        <label for="house">House Affiliation:</label>
        <select id="house" name="house" required>
          <option value="">Select your house affiliation</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
          <option value="None">No House Affiliation</option>
        </select>
        <input type="submit" value="Access Admin Dashboard">
      </form>
    </div>
    <nav style="margin-top: 30px;"><router-link to="/" class="magical-button">Return to Hogwarts Portal</router-link></nav>
  </div>
</template>