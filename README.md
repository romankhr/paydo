Paydo Automation Framework

Project Description

The Paydo Automation Framework is designed to automate end-to-end tests for the Paydo web application. It leverages Playwright and Cucumber for efficient test execution, reporting, and BDD-style test structuring.


Installation

To get started with the project, follow these steps:

Clone the repository:

git clone 

Install dependencies:

npm install

Ensure Playwright is installed:

npx playwright install

Running Tests

Run all tests:

 npm run test-and-report

Run tests with specific tags:

 npx cucumber-js tests/features --tags "@ui"

