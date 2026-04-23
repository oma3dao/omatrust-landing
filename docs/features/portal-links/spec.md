# Portal Links — Test Spec

Status: Implemented

## Overview

The OMATrust landing page (`www.omatrust.org`) links to the OMATrust reputation portal. All portal links use the `NEXT_PUBLIC_PORTAL_URL` environment variable, defaulting to `https://app.omatrust.org`.

## Links to verify

### Navigation

| Element                        | Expected URL                      |
| ------------------------------ | --------------------------------- |
| "Sign In" button (desktop)     | `{PORTAL_URL}/?action=signin`     |
| "Sign In" button (mobile menu) | `{PORTAL_URL}/?action=signin`     |

### Hero section

| Element              | Expected URL           |
| -------------------- | ---------------------- |
| "Publish Trust" CTA  | `{PORTAL_URL}/publish` |
| Second CTA button    | `{PORTAL_URL}/`        |

### Use cases section

| Element                  | Expected URL                                     |
| ------------------------ | -----------------------------------=------------ |
| Verify x402 Receipts     | `{PORTAL_URL}/publish?type=receipt`              |
| Authorize Service Keys   | `{PORTAL_URL}/publish?type=key-binding`          |
| Publish Security Audits  | `{PORTAL_URL}/publish?type=security-assessment`  |
| Issue Certifications     | `{PORTAL_URL}/publish?type=certification`        |
| Enable Portable Reviews  | `{PORTAL_URL}/publish?type=user-review`          |

### Developer links section

| Element            | Expected URL     |
| ------------------ | ---------------- |
| Reputation Portal  | `{PORTAL_URL}/`  |

### Non-portal links (should NOT change)

These links are hardcoded and should remain unchanged:

| Element                  | Expected URL                       |
| ------------------------ | ---------------------------------- |
| Registry (feature cards) | `https://registry.omatrust.org`    |
| Registry (footer)        | `https://registry.omatrust.org`    |
| Developer Docs           | `https://docs.omatrust.org`        |
| GitHub                   | `https://github.com/oma3dao`       |
| OMA3.org                 | `https://oma3.org`                 |

## Environment variable

| Variable                   | Default                        | Local dev              |
| -------------------------- | ------------------------------ | ---------------------- |
| `NEXT_PUBLIC_PORTAL_URL`   | `https://app.omatrust.org`     | `http://localhost:3000`|

## Test procedure

1. Verify all portal links point to the correct URLs in production (default)
2. Set `NEXT_PUBLIC_PORTAL_URL=http://localhost:3000` in `.env.local`, restart dev server, verify all portal links point to localhost
3. Verify all non-portal links are unchanged
4. Verify "Sign In" links include `?action=signin` parameter
5. Verify use case links include the correct `?type=` parameter
6. Verify all external links open in a new tab (`target="_blank"`)
