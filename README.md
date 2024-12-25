# Python_drug_webpage_project
This project combines web scraping, data cleaning, and backend development to create a searchable drug information platform. The application fetches drug details, cleans and stores the data in a SQLite database, and provides a user-friendly interface for drug search and analysis.
-------------x-----------------------x-----------------------x--------------------------x




Key Features
1. Web Scraping and Data Analysis
Objective: Scrape drug names, uses, and side effects from Drugs.com.
Libraries Used:
requests: Fetches HTML content from the web.
BeautifulSoup: Parses and extracts relevant data.
pandas: Cleans and processes the data into structured formats.
sqlite3: Stores and queries the cleaned data in a local SQL database.
Process:
Scrape details for 50 drugs, including their names, uses, and side effects.
Clean and normalize the data (remove duplicates, standardize formats).
Store the cleaned data in a SQLite database.
Analyze data with SQL queries, including:
Top 5 most common drug uses.
Most frequent side effects.
Count of unique drug names.
-------------x-----------------------x-----------------------x--------------------------x


   
2. Backend
Tech Stack:
Node.js with Express.js: Handles API routes and server logic.
SQLite3: Database used to store and retrieve drug data.
CORS: Enables secure communication between the frontend and backend.
API Endpoint:
/search: Searches for a drug based on a query name. Implements partial matching using the SQL LIKE operator.
-------------x-----------------------x-----------------------x--------------------------x


   
3. Frontend
Tech Stack:
Basic HTML, CSS, and JavaScript.
CSS provides a responsive, user-friendly UI with animations.
JavaScript handles dynamic drug search and displays results fetched from the backend.
Features:
Input field for entering drug names.
Display search results (drug name and uses).
Detailed view for selected drug side effects.
Error handling for missing drug names or server issues.
-------------x-----------------------x-----------------------x--------------------------x


   
How It Works:

Data Scraping:
Run the Python script to scrape data and populate the SQLite database.
Backend:
Start the Express.js server to serve the drug data via API.
Frontend:
Access the HTML interface to search for drugs and view details dynamically.
-------------x-----------------------x-----------------------x--------------------------x

   
How to Use:

Clone this repository.
Install dependencies:
Python: requests, beautifulsoup4, pandas, sqlite3.
Node.js: express, sqlite3, cors.
Run the Python script to scrape and populate the database.
Start the backend server:
node server.js
Open the index.html file in a browser and search for drug information.
