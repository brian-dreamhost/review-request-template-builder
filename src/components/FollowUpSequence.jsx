import { useState } from 'react'
import { getFollowUpSequence, fillTemplate } from '../templates'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer bg-oblivion border border-metal/30 text-galactic hover:text-white hover:border-metal/50 focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
    >
      {copied ? (
        <>
          <svg className="w-3 h-3 text-turtle" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          <span className="text-turtle">Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
          Copy
        </>
      )}
    </button>
  )
}

const sequenceLabels = {
  day1: { label: 'Message 1 — Initial Request', timing: 'Send Day 1 (same day or next morning)', color: 'text-azure' },
  day3: { label: 'Message 2 — Gentle Reminder', timing: 'Send Day 3-5 (give them time)', color: 'text-tangerine' },
  day7: { label: 'Message 3 — Final Follow-Up', timing: 'Send Day 7-10 (last chance)', color: 'text-prince' },
}

export default function FollowUpSequence({ channel, tone, businessData, enabled, onToggle }) {
  const sequence = getFollowUpSequence(channel, tone)

  if (channel !== 'email' && channel !== 'sms') {
    return null
  }

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-azure" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
          Follow-Up Sequence
        </h2>
        <button
          onClick={onToggle}
          className={`relative w-12 h-6 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss ${
            enabled ? 'bg-azure' : 'bg-metal/40'
          }`}
          role="switch"
          aria-checked={enabled}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 ${
              enabled ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {!enabled && (
        <p className="text-galactic text-sm">
          Enable to generate a 3-message follow-up sequence with recommended timing for each message.
        </p>
      )}

      {enabled && sequence && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs text-galactic mb-3">
            A strategic 3-message sequence that gradually increases urgency while staying respectful.
          </p>

          {['day1', 'day3', 'day7'].map((day) => {
            const meta = sequenceLabels[day]
            const template = sequence[day]
            if (!template) return null

            const filled = fillTemplate(template, businessData)
            const isEmail = channel === 'email'
            const displayText = isEmail
              ? (typeof filled === 'object' ? filled.body : filled)
              : (typeof filled === 'string' ? filled : filled.body)
            const subjectLine = isEmail && typeof filled === 'object' ? filled.subject : null
            const copyText = subjectLine ? `Subject: ${subjectLine}\n\n${displayText}` : displayText

            return (
              <div key={day} className="bg-midnight rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <p className={`text-sm font-semibold ${meta.color}`}>{meta.label}</p>
                    <p className="text-xs text-galactic">{meta.timing}</p>
                  </div>
                  <CopyButton text={copyText} />
                </div>

                {subjectLine && (
                  <div className="mb-2 pb-2 border-b border-metal/20">
                    <span className="text-xs text-galactic">Subject: </span>
                    <span className="text-sm text-white font-medium">{subjectLine}</span>
                  </div>
                )}

                <pre className="text-cloudy text-sm whitespace-pre-wrap font-[inherit] leading-relaxed">
                  {displayText}
                </pre>

                {channel === 'sms' && (
                  <div className={`text-xs mt-2 ${displayText.length > 160 ? 'text-tangerine' : 'text-galactic'}`}>
                    {displayText.length} / 160 characters
                    {displayText.length > 160 && ' — Consider shortening'}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
