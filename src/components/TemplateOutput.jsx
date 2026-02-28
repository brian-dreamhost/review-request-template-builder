import { useState } from 'react'
import { getTemplates, fillTemplate } from '../templates'

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
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
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 min-h-[36px] cursor-pointer bg-oblivion border border-metal/30 text-galactic hover:text-white hover:border-metal/50 focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5 text-turtle" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          <span className="text-turtle">Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
          <span>{label || 'Copy'}</span>
        </>
      )}
    </button>
  )
}

function SmsCharCount({ text }) {
  const length = text.length
  const segments = Math.ceil(length / 160) || 1
  const isOverLimit = length > 160

  return (
    <div className={`text-xs mt-2 ${isOverLimit ? 'text-tangerine' : 'text-galactic'}`}>
      {length} / 160 characters
      {segments > 1 && ` (${segments} segments)`}
      {isOverLimit && ' — Consider shortening for best delivery'}
    </div>
  )
}

export default function TemplateOutput({ channel, scenario, tone, businessData }) {
  const [selectedVariation, setSelectedVariation] = useState(0)
  const templates = getTemplates(channel, scenario, tone)

  if (!templates || templates.length === 0) {
    return (
      <div className="card-gradient border border-metal/20 rounded-2xl p-4 sm:p-6">
        <p className="text-galactic text-sm">No templates available for this combination. Try a different scenario or tone.</p>
      </div>
    )
  }

  const currentIdx = Math.min(selectedVariation, templates.length - 1)
  const filled = fillTemplate(templates[currentIdx], businessData)

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-4 sm:p-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-azure" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          Generated Template
        </h2>

        {templates.length > 1 && (
          <div className="flex items-center gap-1">
            <span className="text-xs text-galactic mr-2">Variation:</span>
            {templates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVariation(idx)}
                className={`w-9 h-9 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss ${
                  currentIdx === idx
                    ? 'bg-azure text-white'
                    : 'bg-oblivion text-galactic hover:text-white border border-metal/20'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Email output */}
      {channel === 'email' && typeof filled === 'object' && filled.subject && (
        <div className="space-y-3">
          <div className="bg-midnight rounded-lg p-3">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs text-galactic font-medium uppercase tracking-wide">Subject Line</span>
              <CopyButton text={filled.subject} label="Copy Subject" />
            </div>
            <p className="text-white text-sm font-medium">{filled.subject}</p>
          </div>
          <div className="bg-midnight rounded-lg p-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs text-galactic font-medium uppercase tracking-wide">Email Body</span>
              <CopyButton text={filled.body} label="Copy Body" />
            </div>
            <pre className="text-cloudy text-sm whitespace-pre-wrap font-[inherit] leading-relaxed">{filled.body}</pre>
          </div>
          <div className="flex justify-end">
            <CopyButton
              text={`Subject: ${filled.subject}\n\n${filled.body}`}
              label="Copy Full Email"
            />
          </div>
        </div>
      )}

      {/* SMS output */}
      {channel === 'sms' && typeof filled === 'string' && (
        <div className="space-y-3">
          <div className="bg-midnight rounded-lg p-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs text-galactic font-medium uppercase tracking-wide">Text Message</span>
              <CopyButton text={filled} label="Copy" />
            </div>
            <p className="text-cloudy text-sm leading-relaxed">{filled}</p>
            <SmsCharCount text={filled} />
          </div>
        </div>
      )}

      {/* In-Person Script output */}
      {channel === 'in-person' && typeof filled === 'string' && (
        <div className="space-y-3">
          <div className="bg-midnight rounded-lg p-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs text-galactic font-medium uppercase tracking-wide">Script</span>
              <CopyButton text={filled} label="Copy Script" />
            </div>
            <pre className="text-cloudy text-sm whitespace-pre-wrap font-[inherit] leading-relaxed">{filled}</pre>
          </div>
        </div>
      )}

      {/* Print output (headline + body + cta displayed as card preview) */}
      {channel === 'print' && typeof filled === 'object' && filled.headline && (
        <div className="space-y-3">
          <div className="bg-midnight rounded-lg p-3">
            <span className="text-xs text-galactic font-medium uppercase tracking-wide block mb-3">Card Preview</span>
            <div className="bg-white rounded-xl p-6 text-center max-w-sm mx-auto">
              <p className="text-[#1a1a1a] font-bold text-lg mb-2">{businessData.businessName || 'Your Business'}</p>
              <p className="text-[#333] font-bold text-xl mb-2">{filled.headline}</p>
              <p className="text-[#555] text-sm mb-4">{filled.body}</p>
              {businessData.reviewLink && (
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-[#888] text-xs mb-1">Scan to review:</p>
                  <div className="w-24 h-24 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-[#999] text-xs">QR Code</span>
                  </div>
                </div>
              )}
              <p className="text-[#0073EC] text-xs font-medium">{filled.cta}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <CopyButton
              text={`${businessData.businessName || 'Your Business'}\n\n${filled.headline}\n\n${filled.body}\n\n${filled.cta}\n\n${businessData.reviewLink || '[Review Link]'}`}
              label="Copy Card Text"
            />
          </div>
          <p className="text-xs text-galactic">Use the Printable Card section below for a full print-ready design with QR code.</p>
        </div>
      )}
    </div>
  )
}
