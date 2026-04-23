const DEFAULT_PORTAL_URL = "https://app.omatrust.org"

export function getPortalUrl() {
  const configured = process.env.NEXT_PUBLIC_PORTAL_URL?.trim()
  return (configured && configured.length > 0 ? configured : DEFAULT_PORTAL_URL).replace(/\/+$/, "")
}

export function portalLink(path: string) {
  return `${getPortalUrl()}${path}`
}
