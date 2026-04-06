/**
 * Header bar links (max 6): short labels, matches real `id`s on the page.
 * UPLINK is the ENCRYPTED_PORTAL CTA. DEPLOY / `#ops` is chapter-rail only.
 */
export const LANDING_HEADER_NAV = [
  { id: 'threats', label: 'VECTORS' },
  { id: 'intel', label: 'INTEL' },
  { id: 'perimeter', label: 'MESH' },
  { id: 'ecosystem', label: 'TRUST' },
  { id: 'network', label: 'ZERO_TRUST' },
  { id: 'team', label: 'HUMANS' },
] as const

/** Section ids and labels for sticky chapter nav + deep links. Order matches page flow. */
export const LANDING_CHAPTERS = [
  { id: 'top', code: '00', label: 'PRIME' },
  { id: 'threats', code: '01', label: 'VECTORS' },
  { id: 'intel', code: '02', label: 'INTEL' },
  { id: 'perimeter', code: '03', label: 'MESH' },
  { id: 'ops', code: '04', label: 'DEPLOY' },
  { id: 'ecosystem', code: '05', label: 'TRUST_NET' },
  { id: 'network', code: '06', label: 'ZERO_TRUST' },
  { id: 'team', code: '07', label: 'HUMANS' },
  { id: 'uplink', code: '08', label: 'UPLINK' },
] as const
