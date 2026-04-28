---
title: Import Bookings from Email
description: Configure AI-powered email parsing to automatically import transportation, lodging, and activity reservations
---

# Import Bookings from Email

This feature enables automatic extraction and import of transportation, lodging, and activity reservations from a configured IMAP email account. The system uses an LLM to parse email content and identify booking information.

## Overview

The import process operates as follows:

1. A scheduled job connects to the configured IMAP server every 15 minutes
2. Fetches unread emails from the Inbox
3. Filters emails by recipient address if configured
4. Validates the sender against registered Surmai users
5. Extracts booking information via LLM analysis
6. Matches bookings to active trips where the sender is a collaborator
7. Creates corresponding transportation, lodging, or activity entries
8. Marks processed emails as read

Manual triggers are available via the "Import Booking" button in the administrative interface. Error logs are accessible through the [Pocketbase Admin Portal](./using-pocketbase-admin-portal.md).

## AI Model Configuration

The feature requires an OpenAI-compatible API endpoint:

| Parameter | Description |
|-----------|-------------|
| API Endpoint | URL of the LLM provider (e.g., `http://<host>:11434/v1`) |
| API Key | Authentication credential for the endpoint |
| Model Name | Instruct model name (e.g., `llama3:latest`, `gpt-4o-mini`) |

Recommended models include basic instruct models with sufficient context window for parsing confirmation emails. The "Test Prompt" feature verifies connectivity and integration.

## IMAP Settings

The system connects to the email server using IMAP:

| Parameter | Description |
|-----------|-------------|
| IMAP Server | Hostname of the mail server |
| IMAP Port | Communication port (typically 993 for SSL) |
| Username | Mailbox authentication username |
| Password | Mailbox authentication password |
| Recipient Address | Filter for specific email addresses (optional). Applies to To, Cc, and Bcc fields. Useful for plus-addressed email routing. |

## Limitations

The accuracy of booking extraction depends on:
- **Email content quality**: Plain text emails with clear booking details perform best. HTML-heavy emails, images, or emails with complex layouts may produce incomplete or inaccurate results.
- **Model capability**: Different models vary in their ability to parse unstructured email content. Testing with your specific email formats is recommended before production use.

This feature is best suited as a starting point for manual review rather than fully automated import.

## Privacy Considerations

This feature transmits email content to the configured LLM provider for parsing. Review the provider's data handling policies before enabling. For self-hosted deployments, local LLM instances (e.g., Ollama) keep data within the infrastructure.

## User Communication

Users will not automatically receive notification of this feature. Administrators must communicate which email address to forward booking confirmations.