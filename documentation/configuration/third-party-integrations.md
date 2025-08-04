---
title: Third-Party Service Integrations
description: Connect Surmai with external services and applications
---

# Third-Party Service Integrations

Surmai supports integration with external third-party services for enhanced functionality.
All integrations are:
- Optional
- Disabled by default (opt-in)
- Configured by system administrators
- Designed to transmit non-PII (Personally Identifiable Information) data only

Configuration options for these integrations are accessible via the "Integrations" tab in the Settings interface.

## Flight Information Providers
Surmai can retrieve flight route data through the following service providers:

### adsbdb.com

- Integration type: API-based
- Authentication: No API key required
- Requirements: Precise flight number e.g. DAL3557 instead of DL3557
- Cost structure: No usage fees as of July 2025

### FlightAware AeroAPI

- Integration documentation: [AeroAPI Documentation](https://www.flightaware.com/commercial/aeroapi)
- Authentication: API key required
- Cost structure: Subscription-based service
- Usage notes:
  - "Personal" tier accounts include limited monthly API credits
  - Surmai utilizes a single API endpoint from the available service offerings as of July 2025