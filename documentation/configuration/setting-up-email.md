---
title: SMTP Settings
description: Configure email settings for notifications and user communications
---

# SMTP Configuration

The SMTP configuration section provides system administrators with controls for configuring email notification services.
This functionality enables the Surmai to send automated communications to users.

## Email Notification System

The SMTP server integration supports the following notification types:

- Authentication event notifications
- Password reset communications
- User invitation emails

## Configuration Parameters

**Basic Settings:**

- **SMTP Server**: Hostname or IP address of the mail server
- **Port**: Communication port for the SMTP service (typically 25, 465, or 587)
- **Authentication**: Username and password credentials for the mail server
- **Encryption**: TLS/SSL configuration options for secure transmission
- **Local Server Name**: This is the fully qualified domain name for the surmai server, specifically, EHLO/HELO domain for SMTP. Some SMTP servers, such as the Gmail SMTP-relay, requires a proper domain name in the inital EHLO/HELO exchange and will reject attempts to use localhost.
