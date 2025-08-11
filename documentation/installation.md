---
title: Installing Surmai
description: Learn how to install and deploy Surmai as a Docker container
next:
  text: 'Configuration'
  link: '/documentation/configuration'
---

# Installing Surmai

Surmai is only available as a self hosted application at this time. It can be deployed as a Docker container on your
server and accessed via a browser.

## Using a docker compose file

```yaml
volumes:
  surmai_data:

services:
  surmai_server:
    container_name: surmai_server
    # latest images point to released versions
    # For the yet unreleased updates, use the main tag i.e.
    # image: ghcr.io/rohitkumbhar/surmai:main
    image: ghcr.io/rohitkumbhar/surmai:latest
    volumes:
      - surmai_data:/pb_data
    ports:
      - "9090:8080"
    restart: always
    environment:
      SURMAI_ADMIN_EMAIL: admin@surmai.app # Add your default administrator email
      SURMAI_ADMIN_PASSWORD: ChangeMe123#@! # Admin password. Minimum 9 characters with mixed case, numbers, and special characters
      PB_DATA_DIRECTORY: /pb_data # Must match volume directory above
```

## Environment Variables

| Key                     | Description                                              | Default Value |
|-------------------------|----------------------------------------------------------|---------------|
| `SURMAI_ADMIN_EMAIL`    | **REQUIRED**: E-Mail address for the administrative user |               |
| `SURMAI_ADMIN_PASSWORD` | **REQUIRED**: Password for the administrative user       |               |
| `PB_DATA_DIRECTORY`     | **REQUIRED**: Data directory set in the volume mapping   |               |

## Deploying with backup using Litestream Replication

> [!TIP]
> This is completely optional. Pocketbase offers a [built-in backup solution](https://pocketbase.io/docs/going-to-production/#backup-and-restore) that snapshots your database on a given
> schedule. Use this method if you need continuous replication to ensure no data is lost.

Surmai uses SQLite as its database which can be replicated using [Litestream](https://litestream.io/) to an S3
compatible storage. The following environment variables are required for enabling continuous replication via
`litestream replicate`.

| Key                               | Description                                              | Default Value |
|-----------------------------------|----------------------------------------------------------|---------------|
| `SURMAI_DB_BKP_BUCKET_URL`        | **REQUIRED**: Endpoint URL                               |               |
| `SURMAI_DB_BKP_ACCESS_KEY_ID`     | **REQUIRED**: Access key with write access to the bucket |               |
| `SURMAI_DB_BKP_ACCESS_KEY_SECRET` | **REQUIRED**: Secret associated with the access key      |               |
