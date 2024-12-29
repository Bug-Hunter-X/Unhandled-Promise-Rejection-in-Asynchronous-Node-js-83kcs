# Unhandled Promise Rejection in Asynchronous Node.js

This repository demonstrates an example of an unhandled promise rejection error in asynchronous Node.js code and provides a solution to handle the error gracefully.

## Bug
The `bug.js` file contains a simple HTTP server that simulates an asynchronous operation that might throw an error.  The error is not handled, resulting in an unhandled promise rejection and a crash.

## Solution
The `bugSolution.js` file demonstrates a solution by using a `try...catch` block within the asynchronous operation to handle potential errors.  This prevents the unhandled promise rejection.