import { useState, useRef, useEffect } from 'react'
import QRCode from 'qrcode'

export default function QRCodeGenerator({ reviewLink }) {
  const [qrDataUrl, setQrDataUrl] = useState(null)
  const [error, setError] = useState(null)
  const imgRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function generate() {
      if (!reviewLink || !reviewLink.trim()) {
        if (!cancelled) {
          setQrDataUrl(null)
          setError(null)
        }
        return
      }

      try {
        new URL(reviewLink)
        const dataUrl = await QRCode.toDataURL(reviewLink, {
          width: 300,
          margin: 2,
          color: { dark: '#000000', light: '#ffffff' },
          errorCorrectionLevel: 'M',
        })
        if (!cancelled) {
          setQrDataUrl(dataUrl)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          if (err instanceof TypeError) {
            setError('Please enter a valid URL')
          } else {
            setError('Could not generate QR code')
          }
          setQrDataUrl(null)
        }
      }
    }

    generate()
    return () => { cancelled = true }
  }, [reviewLink])

  const handleDownload = () => {
    if (!qrDataUrl) return
    const link = document.createElement('a')
    link.download = 'review-qr-code.png'
    link.href = qrDataUrl
    link.click()
  }

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-4 sm:p-6">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-azure" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
        </svg>
        QR Code Generator
      </h2>

      {!reviewLink || !reviewLink.trim() ? (
        <div className="bg-midnight rounded-lg p-4 text-center">
          <svg className="w-10 h-10 text-galactic mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
          </svg>
          <p className="text-galactic text-sm">Enter your Google Review Link above to generate a QR code.</p>
        </div>
      ) : error ? (
        <div className="bg-midnight rounded-lg p-4 text-center">
          <svg className="w-10 h-10 text-coral mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          <p className="text-coral text-sm">{error}</p>
        </div>
      ) : qrDataUrl ? (
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white rounded-xl p-4">
            <img
              ref={imgRef}
              src={qrDataUrl}
              alt="QR Code for Google Review"
              className="w-48 h-48"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2.5 bg-azure text-white rounded-lg text-sm font-medium hover:bg-azure-hover transition-colors min-h-[44px] cursor-pointer focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download PNG
            </button>
          </div>
          <p className="text-xs text-galactic text-center">
            This QR code links directly to your Google review page. Use it on print materials, receipts, or table tents.
          </p>
        </div>
      ) : null}
    </div>
  )
}
