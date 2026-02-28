import { useState, useEffect } from 'react'
import QRCode from 'qrcode'

export default function PrintableCard({ businessData }) {
  const [cardSize, setCardSize] = useState('business') // 'business' or 'tent'
  const [qrDataUrl, setQrDataUrl] = useState(null)

  useEffect(() => {
    let cancelled = false
    const link = businessData.reviewLink

    async function generate() {
      if (!link || !link.trim()) {
        if (!cancelled) {
          setQrDataUrl(null)
        }
        return
      }

      try {
        new URL(link)
        const dataUrl = await QRCode.toDataURL(link, {
          width: 200,
          margin: 1,
          color: { dark: '#000000', light: '#ffffff' },
          errorCorrectionLevel: 'M',
        })
        if (!cancelled) {
          setQrDataUrl(dataUrl)
        }
      } catch {
        if (!cancelled) {
          setQrDataUrl(null)
        }
      }
    }

    generate()
    return () => { cancelled = true }
  }, [businessData.reviewLink])

  const handlePrint = () => {
    window.print()
  }

  const businessName = businessData.businessName || 'Your Business'

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-4 sm:p-6 no-print">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-azure" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
        </svg>
        Printable Review Card
      </h2>

      {/* Size selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setCardSize('business')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss ${
            cardSize === 'business'
              ? 'bg-azure text-white'
              : 'bg-oblivion text-galactic hover:text-white border border-metal/20 hover:border-metal/40'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
          Business Card (3.5&quot; x 2&quot;)
        </button>
        <button
          onClick={() => setCardSize('tent')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss ${
            cardSize === 'tent'
              ? 'bg-azure text-white'
              : 'bg-oblivion text-galactic hover:text-white border border-metal/20 hover:border-metal/40'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          Table Tent (4&quot; x 6&quot;)
        </button>
      </div>

      {/* Card Preview */}
      <div className="bg-midnight rounded-lg p-4 sm:p-6 flex justify-center overflow-x-auto">
        {cardSize === 'business' ? (
          <div
            className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center shrink-0"
            style={{ width: '336px', height: '192px', padding: '12px 16px' }}
          >
            <p className="text-[#1a1a1a] font-bold text-sm leading-tight">{businessName}</p>
            <p className="text-[#333] font-bold text-base leading-tight mt-1">We&apos;d Love Your Feedback!</p>
            <div className="flex items-center gap-3 mt-2">
              {qrDataUrl ? (
                <img src={qrDataUrl} alt="QR Code" className="w-16 h-16 shrink-0" />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center shrink-0">
                  <span className="text-gray-400 text-[8px]">QR</span>
                </div>
              )}
              <div className="text-left">
                <p className="text-[#555] text-[10px] leading-snug">Scan the QR code or visit:</p>
                <p className="text-[#0073EC] text-[9px] font-medium break-all leading-snug mt-0.5">
                  {businessData.reviewLink || 'your-review-link.com'}
                </p>
              </div>
            </div>
            <p className="text-[#888] text-[8px] mt-1.5">It takes less than a minute. Thank you!</p>
          </div>
        ) : (
          <div
            className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-between text-center shrink-0"
            style={{ width: '288px', height: '432px', padding: '24px 20px' }}
          >
            <div>
              <p className="text-[#1a1a1a] font-bold text-lg leading-tight">{businessName}</p>
              <div className="w-12 h-0.5 bg-[#0073EC] mx-auto mt-2 mb-3" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="text-[#333] font-bold text-xl leading-tight mb-2">We&apos;d Love</p>
              <p className="text-[#333] font-bold text-xl leading-tight mb-4">Your Feedback!</p>

              {qrDataUrl ? (
                <img src={qrDataUrl} alt="QR Code" className="w-28 h-28 mb-3" />
              ) : (
                <div className="w-28 h-28 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-400 text-xs">QR Code</span>
                </div>
              )}

              <p className="text-[#555] text-xs leading-snug mb-1">
                Scan the QR code to leave us a review on Google
              </p>
              <p className="text-[#0073EC] text-[10px] font-medium break-all leading-snug px-2">
                {businessData.reviewLink || 'your-review-link.com'}
              </p>
            </div>

            <div>
              <p className="text-[#888] text-[10px]">It takes less than a minute.</p>
              <p className="text-[#888] text-[10px]">Thank you for your support!</p>
            </div>
          </div>
        )}
      </div>

      {/* Print button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-azure text-white rounded-lg text-sm font-medium hover:bg-azure-hover transition-colors min-h-[44px] cursor-pointer focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
          </svg>
          Print Card
        </button>
      </div>

      <p className="text-xs text-galactic text-center mt-3">
        {cardSize === 'business'
          ? 'Prints at 3.5" x 2" -- standard business card size. Great for receipt inserts or handouts.'
          : 'Prints at 4" x 6" -- fold in half for a table tent. Perfect for counters and tables.'
        }
      </p>

      {/* Hidden print-only card */}
      <div className="hidden print-only">
        {cardSize === 'business' ? (
          <div
            className="print-card print-card-business bg-white rounded-lg flex flex-col items-center justify-center text-center mx-auto"
            style={{ padding: '8px 12px' }}
          >
            <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: '12px' }}>{businessName}</p>
            <p style={{ color: '#333', fontWeight: 700, fontSize: '14px', marginTop: '4px' }}>We&apos;d Love Your Feedback!</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
              {qrDataUrl && (
                <img src={qrDataUrl} alt="QR Code" style={{ width: '56px', height: '56px' }} />
              )}
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: '#555', fontSize: '8px' }}>Scan or visit:</p>
                <p style={{ color: '#0073EC', fontSize: '7px', fontWeight: 500, wordBreak: 'break-all' }}>
                  {businessData.reviewLink || 'your-review-link.com'}
                </p>
              </div>
            </div>
            <p style={{ color: '#888', fontSize: '7px', marginTop: '4px' }}>Thank you!</p>
          </div>
        ) : (
          <div
            className="print-card print-card-tent bg-white rounded-lg flex flex-col items-center justify-between text-center mx-auto"
            style={{ padding: '20px 16px' }}
          >
            <div>
              <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: '18px' }}>{businessName}</p>
              <div style={{ width: '40px', height: '2px', background: '#0073EC', margin: '8px auto' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ color: '#333', fontWeight: 700, fontSize: '20px', marginBottom: '12px' }}>We&apos;d Love Your Feedback!</p>
              {qrDataUrl && (
                <img src={qrDataUrl} alt="QR Code" style={{ width: '100px', height: '100px', marginBottom: '8px' }} />
              )}
              <p style={{ color: '#555', fontSize: '11px', marginBottom: '4px' }}>Scan the QR code to leave a Google review</p>
              <p style={{ color: '#0073EC', fontSize: '9px', fontWeight: 500, wordBreak: 'break-all' }}>
                {businessData.reviewLink || 'your-review-link.com'}
              </p>
            </div>
            <p style={{ color: '#888', fontSize: '10px' }}>It takes less than a minute. Thank you!</p>
          </div>
        )}
      </div>
    </div>
  )
}
