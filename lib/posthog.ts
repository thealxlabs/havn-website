import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init('phc_44Ow1DHNtOGD7R5GnHWy58RMUoAfHniU2NkiRrVPaqj', {
    api_host: 'https://f.thealxlabs.ca',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-01-30',
    person_profiles: 'identified_only',
  })
}

export default posthog
