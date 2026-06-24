const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function sendContactForm(name, email, message) {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Failed to send message')
  return data
}