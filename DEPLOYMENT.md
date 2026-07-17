# Deployment Guide - Stride & Soul Storefront

This document outlines the steps and configuration required to take the Stride & Soul storefront live.

## Prerequisites

- **Node.js**: Version 18 or higher.
- **Shared Storage**: The waitlist system uses a shared JSON file at `/home/team/shared/waitlist.json`. Ensure the production environment has the necessary permissions to read/write this directory.
- **Email Service**: Currently configured with Resend. You will need a valid [Resend API Key](https://resend.com).

## Environment Variables

The following environment variables should be set in your production environment:

- `RESEND_API_KEY`: Your production Resend API key for email delivery.
- `PORT`: (Optional) The port the server should listen on. Defaults to `3000`.
- `NODE_ENV`: Set to `production`.

## Build Instructions

To build the project for production, run:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized static assets.

## Running the Server

The server handles both the API endpoints and serves the static frontend.

```bash
# Start the production server
node server.js
```

For production, it is recommended to use a process manager like **PM2**:

```bash
pm2 start server.js --name "stride-and-soul"
```

## Infrastructure Recommendations

1. **Proxy**: Use a reverse proxy like **Nginx** or **Caddy** to handle SSL (HTTPS) and proxy requests to the Node.js server on port 3000.
2. **Persistent Storage**: Ensure `/home/team/shared` is a persistent volume if deploying via Docker or a cloud provider (e.g., AWS EBS, GCP Filestore).
3. **Email**: Update the `server.js` Resend initialization with your actual API key and verified domain.

## Monitoring

- Monitor `/tmp/server.log` for application logs.
- Use the `/api/simulate-scheduler` endpoint (POST) for testing the email sequence during staging.
