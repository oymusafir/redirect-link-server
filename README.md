# Redirect Server with Node.js

A simple Node.js application to redirect users to different links, ensuring each link is shown to a specified number of visitors before switching to the next.


## Features
- Redirect users to multiple links in a sequential order.
- Each link is served to a fixed number of visitors (default: 5) before switching to the next.
- Loops through the list of links repeatedly.


1. Clone the repository:
   ```bash
   git clone https://github.com/oymusafir/redirect-link-server.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
The app runs on http://localhost:4000.

## Example Flow
- Visitors 1–5 are redirected to `https://link1.com`.
- Visitors 6–10 are redirected to `https://link2.com`.
- Visitors 11–15 are redirected to `https://link3.com`.
- Cycle reapeat.
