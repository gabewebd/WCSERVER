<template>
  <div class="magical-container single-column">
    <div class="form-header">
      <h1>User Login</h1>
    </div>
    <div class="form-content">
      <form action="/getUser" method="GET">
        <label for="userID">User ID:</label>
        <input type="text" id="userID" name="userID" placeholder="Enter your user ID" required />
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
        <input type="submit" value="Access User Dashboard">
      </form>
    </div>
    <nav style="margin-top: 30px;"><router-link to="/" class="magical-button">Return to Hogwarts Portal</router-link></nav>
  </div>
</template>