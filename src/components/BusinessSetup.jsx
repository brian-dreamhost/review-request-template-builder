import { INDUSTRIES } from '../templates'

export default function BusinessSetup({ data, onChange }) {
  const update = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-4 sm:p-6">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-azure" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
        </svg>
        Business Setup
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-cloudy mb-1">
            Business Name <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            value={data.businessName}
            onChange={(e) => update('businessName', e.target.value)}
            placeholder="e.g., Joe's Pizza"
            className="w-full bg-oblivion border border-metal/30 rounded-lg px-3 py-2.5 text-white placeholder-galactic focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-cloudy mb-1">
            Industry / Business Type
          </label>
          <select
            value={data.industry}
            onChange={(e) => update('industry', e.target.value)}
            className="w-full bg-oblivion border border-metal/30 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss transition-colors"
          >
            <option value="">Select industry...</option>
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-cloudy mb-1">
            Google Review Link
          </label>
          <input
            type="url"
            value={data.reviewLink}
            onChange={(e) => update('reviewLink', e.target.value)}
            placeholder="https://g.page/r/YOUR-LINK/review"
            className="w-full bg-oblivion border border-metal/30 rounded-lg px-3 py-2.5 text-white placeholder-galactic focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss transition-colors"
          />
          <details className="mt-2">
            <summary className="text-xs text-galactic cursor-pointer hover:text-cloudy transition-colors">
              How to find your Google Review Link
            </summary>
            <div className="mt-2 text-xs text-galactic bg-midnight rounded-lg p-3 space-y-1">
              <p>1. Go to <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-white transition-colors">Google Maps</a></p>
              <p>2. Search for your business name</p>
              <p>3. Click on your business listing</p>
              <p>4. Click the <strong className="text-cloudy">"Ask for reviews"</strong> button (or Share &rarr; Copy link)</p>
              <p>5. Copy the link and paste it above</p>
              <p className="text-galactic mt-2">Alternatively, search "Google Place ID Finder" to get a direct review link.</p>
            </div>
          </details>
        </div>

        <div>
          <label className="block text-sm font-medium text-cloudy mb-1">
            Customer Name <span className="text-galactic text-xs">(optional)</span>
          </label>
          <input
            type="text"
            value={data.customerName}
            onChange={(e) => update('customerName', e.target.value)}
            placeholder="e.g., Sarah"
            className="w-full bg-oblivion border border-metal/30 rounded-lg px-3 py-2.5 text-white placeholder-galactic focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-cloudy mb-1">
            Service / Product <span className="text-galactic text-xs">(optional)</span>
          </label>
          <input
            type="text"
            value={data.service}
            onChange={(e) => update('service', e.target.value)}
            placeholder="e.g., haircut, oil change, cleaning"
            className="w-full bg-oblivion border border-metal/30 rounded-lg px-3 py-2.5 text-white placeholder-galactic focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss transition-colors"
          />
        </div>
      </div>
    </div>
  )
}
