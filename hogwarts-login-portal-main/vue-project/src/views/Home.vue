<template>
  <div class="magical-container">
    <div class="form-header">
      <img src="/images/Hogwartscrest.webp" alt="Hogwarts Crest" class="hogwarts-crest" />
      <h1>Hogwarts School of Witchcraft and Wizardry</h1>
      <p class="magical-text">Welcome to the Official Magical Login Portal</p>
      <p>Access your account to enter the wizarding world. Each portal leads to your personalized magical dashboard within our enchanted walls.</p>
      <div class="navigation-section">
        <nav class="main-nav">
          <ul>
            <li><router-link to="/userForm">User Login</router-link></li>
            <li><router-link to="/studentForm">Student Login</router-link></li>
            <li><router-link to="/adminForm">Admin Login</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    
    <div class="form-content">
      <div class="info-section">
        <p><strong>The Four Houses:</strong></p>
        <div class="houses-container">
          </div>
        <h2>About Hogwarts Portal</h2>
        <p>Whether you're a student or admin, use your magical credentials to enter. Access your magical journey right in your hands.</p>
        <p class="spell-text">Enter your credentials to unlock your magical account and access all Hogwarts services!</p>
      </div>
    </div>
  </div>
</template>