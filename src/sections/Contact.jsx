import { useState } from 'react'
import { sendContactForm } from '../api/contact'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setStatus('')

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)
    try {
      await sendContactForm(form.name, form.email, form.message)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-wrapper">
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <p className="about-para">
            I'm open to internship opportunities and collaboration.
            Feel free to reach out about anything.
          </p>
          <p className="contact-email">zainab@example.com</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name"
              value={form.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="your@email.com"
              value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="What's on your mind?"
              value={form.message} onChange={handleChange} />
          </div>
          {error && <p className="form-msg error">{error}</p>}
          {status === 'success' && <p className="form-msg success">Message sent! I'll get back to you soon.</p>}
          <button type="submit" className="btn btn-primary"
            style={{ width: '100%' }} disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}