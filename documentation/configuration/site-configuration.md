---
title: Site Configuration
---
# Site Configuration

The site configuration section provides administrators with comprehensive system controls for managing access, authentication, and security settings of the Surmai instance. These configuration options are accessible through the administrative interface and allow for customization of the platform according to organizational requirements.


## User Registration Management
Control user access to the Surmai instance by enabling or disabling new user registration functionality.

**Configuration Details:**
- **Enable Registration**: Allows new users to create accounts on the Surmai platform
- **Disable Registration**: Restricts account creation to administrator-managed processes only
- **Use Cases**: 
  - Disable for private instances or when user provisioning is managed through alternative processes
  - Implement temporary access restrictions during maintenance or security reviews

## OAuth2 Authentication Configuration
Implement secure single sign-on (SSO) integration with external identity providers to streamline authentication processes and enhance security.

**Supported Identity Providers:**
- Google Identity Platform
- Apple ID Authentication Services
- Microsoft Identity Platform (Azure AD)
- Custom OpenID Connect (OIDC) providers that conform to OAuth2 specifications e.g Authentik, Keycloak


**Technical Implementation Details:**
- **OAuth2 Callback URL**: `https://<surmai.server.domain>/api/oauth2-redirect`
  - This URL must be registered with your identity provider as an authorized redirect URI
  - Replace `<surmai.server.domain>` with your actual deployment domain
- **Default Configuration**: The standard configuration interface supports one OAuth2 provider
- **Multiple Provider Support**: For environments requiring multiple identity providers, extended configuration is available through the [Pocketbase Admin Interface](./using-pocketbase-admin-portal.md)

**Configuration Process:**
1. Obtain client credentials (Client ID and Client Secret) from your identity provider
2. Configure the appropriate OAuth2 endpoints in the Surmai administration interface
3. Specify the required scopes for user authentication and profile information
4. Test the authentication flow to verify proper integration

**Security Considerations:**
- Regularly audit OAuth2 configurations to ensure compliance with security policies
- Implement appropriate scope limitations to minimize unnecessary data access
- Consider enabling additional security features such as Proof Key for Code Exchange (PKCE) when supported