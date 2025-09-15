import express, { response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve the Vue application's production build files
// This assumes your Vue project is in a folder named 'vue-project'
app.use(express.static(path.join(__dirname, 'vue-project', 'dist')));

// API Routes
// user
app.get('/getUser', (req, res) => {
    var response = {
        userID: req.query.userID,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
    }
    if (response.userID && response.firstName && response.lastName) {
        console.log("User Login: ", response);
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>User Dashboard - Hogwarts</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body class="response-page">
                <div class="magical-container single-column">
                    <img src="/images/Hogwartscrest.webp" alt="Hogwarts Crest" class="hogwarts-crest" />
                    <h1>Welcome Back, User!</h1>
                    <p class="magical-text">Login Successful</p>
                    <p>Welcome back to your Hogwarts user dashboard!</p>
                    <p class="spell-text">Your magical journey continues!</p>
                    
                    <div class="registration-details">
                        <p><strong>User ID:</strong> ${response.userID}</p>
                        <p><strong>Name:</strong> ${response.firstName} ${response.lastName}</p>
                    </div>
                    
                    <nav>
                        <a href="/" class="magical-button">Return to Hogwarts Portal</a>
                    </nav>
                </div>
            </body>
            </html>
        `);
    } else {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error - Hogwarts Portal</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body class="response-page error-page">
                <div class="magical-container single-column">
                    <img src="/images/Hogwartscrest.webp" alt="Hogwarts Crest" class="hogwarts-crest" />
                    <h1>Access Denied!</h1>
                    <p class="magical-text">User Authentication Failed</p>
                    <p>All user credentials are required for magical authentication!</p>
                    <p class="spell-text">Please provide complete information.</p>
                    
                    <div class="error-details">
                        <h2>Missing Information</h2>
                        <p>Please ensure you provide your User ID, First Name, and Last Name.</p>
                    </div>
                    
                    <nav>
                        <a href="/userForm" class="magical-button">Try Again</a>
                    </nav>
                </div>
            </body>
            </html>
        `);
    }
});


// student
app.get('/getStudent', (req, res) => {
    var response = {
        studentID: req.query.studentID,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        house: req.query.house,
    }
    if (response.studentID && response.firstName && response.lastName && response.house) {
        console.log("Student Login: ", response);
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Student Dashboard - Hogwarts</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body class="response-page">
                <div class="magical-container single-column">
                    <img src="/images/Hogwartscrest.webp" alt="Hogwarts Crest" class="hogwarts-crest" />
                    <h1>Welcome Back, Student!</h1>
                    <p class="magical-text">Login Successful</p>
                    <p>Welcome back to your Hogwarts student dashboard!</p>
                    <p class="spell-text">Your magical journey continues!</p>
                    
                    <div class="registration-details">
                        <p><strong>Student ID:</strong> ${response.studentID}</p>
                        <p><strong>Name:</strong> ${response.firstName} ${response.lastName}</p>
                        <p><strong>House:</strong> ${response.house}</p>
                    </div>
                    
                    <nav>
                        <a href="/" class="magical-button">Return to Hogwarts Portal</a>
                    </nav>
                </div>
            </body>
            </html>
        `);
    } else {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error - Hogwarts Portal</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body class="response-page error-page">
                <div class="magical-container single-column">
                    <img src="/images/Hogwartscrest.webp" alt="Hogwarts Crest" class="hogwarts-crest" />
                    <h1>Access Denied!</h1>
                    <p class="magical-text">Student Authentication Failed</p>
                    <p>All student credentials are required for magical authentication!</p>
                    <p class="spell-text">Please provide complete information.</p>
                    
                    <div class="error-details">
                        <h2>Missing Information</h2>
                        <p>Please ensure you provide your Student ID, First Name, Last Name, and House.</p>
                    </div>
                    
                    <nav>
                        <a href="/studentForm" class="magical-button">Try Again</a>
                    </nav>
                </div>
            </body>
            </html>
        `);
    }
});

// admin
app.get('/getAdmin', (req, res) => {
    var response = {
        adminID: req.query.adminID,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        subject: req.query.subject,
        house: req.query.house,
    }
    
    if (response.adminID && response.firstName && response.lastName && response.house) {
        console.log("Admin Login: ", response);
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Admin Dashboard - Hogwarts</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body class="response-page">
                <div class="magical-container single-column">
                    <img src="/images/Hogwartscrest.webp" alt="Hogwarts Crest" class="hogwarts-crest" />
                    <h1>Welcome Back, Admin!</h1>
                    <p class="magical-text">Faculty Login Successful</p>
                    <p>Welcome back to your Hogwarts faculty dashboard!.</p>
                    <p class="spell-text">Ready to inspire young magical minds!</p>
                    
                    <div class="registration-details">
                        <p><strong>Admin ID:</strong> ${response.adminID}</p>
                        <p><strong>Name:</strong> Prof. ${response.firstName} ${response.lastName}</p>
                        <p><strong>House Head:</strong> ${response.house}</p>
                    </div>
                    
                    <nav>
                        <a href="/" class="magical-button">Return to Hogwarts Portal</a>
                    </nav>
                </div>
            </body>
            </html>
        `);
    } else {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error - Hogwarts Portal</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body class="response-page error-page">
                <div class="magical-container single-column">
                    <img src="/images/Hogwartscrest.webp" alt="Hogwarts Crest" class="hogwarts-crest" />
                    <h1>Access Denied!</h1>
                    <p class="magical-text">Faculty Authentication Failed</p>
                    <p>All admin credentials are required for magical authentication!</p>
                    <p class="spell-text">Please provide complete information.</p>
                    
                    <div class="error-details">
                        <h2>Missing Information</h2>
                        <p>Please ensure you provide your Admin ID, First Name, Last Name, and House Affiliation.</p>
                    </div>
                    
                    <nav>
                        <a href="/adminForm" class="magical-button">Try Again</a>
                    </nav>
                </div>
            </body>
            </html>
        `);
    }
});

// For any other routes, redirect to the Vue app's main file (index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'vue-project', 'dist', 'index.html'));
});


const port = 5000;
const server = app.listen(port, () => {
    console.log(`Hogwarts Portal running on port ${port}`);
    console.log(`Welcome to the magical world of Hogwarts!`);
});