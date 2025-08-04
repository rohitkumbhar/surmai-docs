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
      SURMAI_ADMIN_PASSWORD: ChangeMe123#@! # Admin password. Min 9 characters with all the fixings
      PB_DATA_DIRECTORY: /pb_data # Must match volume directory above
```

## Environment Variables

| Key                     | Description                                              | Default Value |
|-------------------------|----------------------------------------------------------|---------------|
| `SURMAI_ADMIN_USER`     | **REQUIRED**: E-Mail address for the administrative user |               |
| `SURMAI_ADMIN_PASSWORD` | **REQUIRED**: Password for the administrative user       |               |
| `PB_DATA_DIRECTORY`     | **REQUIRED**: Data directory set in the volume mapping   |               |

## Deploying with backup using Litestream

Surmai uses SQLite as its database which can be replicated using [Litestrem](https://litestream.io/). You will have to
setup a `litestram` [configuration file](https://litestream.io/guides/) and deploy it as a separate container along with Surmai.

::: code-group

```yaml[docker-compose.yaml]
volumes:
  surmai_data:

services:
  surmai_server:
    container_name: surmai_server
    image: ghcr.io/rohitkumbhar/surmai:latest
    volumes:
      - surmai_data:/pb_data
    ports:
      - "9090:8080"
    restart: always
    environment:
      SURMAI_ADMIN_EMAIL: admin@surmai.app
      SURMAI_ADMIN_PASSWORD: ChangeMe123#@!
      PB_DATA_DIRECTORY: /pb_data
  litestream:
    container_name: litestream
    image: litestream/litestream:latest
    env_file: ./.env
    restart: always
    command:
      - replicate
    volumes:
      - ./litestream.yml:/etc/litestream.yml
      - surmai_data:/pb_data # Volume access for replication
```


```yaml[litestream.yaml]
dbs:
  - path: /pb_data/auxillary.db
    replicas:
      - url: s3://<s3-region-endpoint>/<aux-bkp-bucket-name>
        access-key-id: ${S3_ACCESS_KEY_ID}
        secret-access-key: ${S3_ACCESS_KEY_SECRET}
  - path: /pb_data/data.db
    replicas:
      - url: s3://<s3-region-endpoint>/<data-bkp-bucket-name>
        access-key-id: ${S3_ACCESS_KEY_ID}
        secret-access-key: ${S3_ACCESS_KEY_SECRET}
```

:::