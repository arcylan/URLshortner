# URL Shortener

A simple URL Shortener web application that converts long URLs into short, shareable links.

## Features

- Generate short URLs from long URLs
- Redirect users from short URL to original URL
- Track URL analytics
- Store user and URL data in database
- Track clicks, IP address, and user agent

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

## How It Works

1. User enters a long URL.
2. The application generates a unique short ID.
3. Short URL is stored with the original URL in the database.
4. When someone opens the short URL, they are redirected to the original website.

## Installation

Clone the repository:

```bash
git clone <repository-url>
