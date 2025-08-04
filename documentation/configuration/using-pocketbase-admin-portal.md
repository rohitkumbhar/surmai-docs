---
title: Using PocketBase Administration Portal
description: Access and use the Pocketbase admin portal for advanced configuration
---

# PocketBase Administration Portal

## Overview

[PocketBase](https://pocketbase.io/) serves as the backend database and authentication system for Surmai. It provides a comprehensive
administration portal that enables system administrators to perform advanced configuration, maintenance, and monitoring
operations. This interface exposes database management capabilities, authentication settings, and system diagnostics
that complement the standard Surmai administrative interface.

## Accessing the Administration Portal

The PocketBase administration portal is accessible through a dedicated URL endpoint within your Surmai deployment:

```
https://<surmai.server.domain>/_/
```

**Access Requirements:**

- Replace `<surmai.server.domain>` with your actual deployment domain
- Ensure your network configuration permits access to this endpoint
- For security purposes, consider restricting access to this endpoint through network controls
- You may need to use a different browser or Private Browsing / Incognito Mode to work around browser cache.

## Authentication

Access to the PocketBase administration portal requires administrative credentials that are configured during the
initial deployment process.

**Authentication Details:**

- **Username**: Value specified in the `SURMAI_ADMIN_USER` environment variable
- **Password**: Value specified in the `SURMAI_ADMIN_PASSWORD` environment variable
- **Configuration Location**: These variables are defined in the `docker-compose.yaml` file

## Administrative Functions

### OAuth2 Provider Configuration

The PocketBase administration portal enables configuration of multiple OAuth2 identity providers beyond the default
provider configured in the standard Surmai interface.

### Database Management

The administration portal provides direct access to the underlying database structure and content, enabling advanced
data management operations.

**Available Operations:**

- **Schema Management**: View and modify database collections and fields
- **Data Manipulation**: Create, read, update, and delete records directly
- **Query Execution**: Run custom queries for complex data operations
- **Index Management**: Optimize database performance through index configuration

### System Logging and Diagnostics

The administration portal provides access to comprehensive system logs that facilitate troubleshooting and performance
monitoring.

**Logging Capabilities:**

- **API Request Logs**: Track incoming and outgoing API requests
- **Authentication Events**: Monitor user authentication attempts and sessions
- **Error Reporting**: Identify and diagnose application errors

### Backup and Recovery

The administration portal enables manual backup operations to ensure data safety and facilitate disaster recovery
procedures.

**Backup Functionality:**

- **Manual Backups**: Create on-demand backups of the entire database
- **Export Options**: Generate portable database exports in various formats
- **Restoration Interface**: Restore from previous backups when necessary
