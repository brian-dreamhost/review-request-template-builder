import { useState } from 'react'
import BusinessSetup from './components/BusinessSetup'
import ScenarioSelector from './components/ScenarioSelector'
import ToneSelector from './components/ToneSelector'
import ChannelTabs from './components/ChannelTabs'
import TemplateOutput from './components/TemplateOutput'
import FollowUpSequence from './components/FollowUpSequence'
import QRCodeGenerator from './components/QRCodeGenerator'
import PrintableCard from './components/PrintableCard'

export default function App() {
  const [businessData, setBusinessData] = useState({
    businessName: '',
    industry: '',
    reviewLink: '',
    customerName: '',
    service: '',
  })
  const [scenario, setScenario] = useState('just-completed')
  const [tone, setTone] = useState('professional')
  const [channel, setChannel] = useState('email')
  const [followUpEnabled, setFollowUpEnabled] = useState(false)

  const fillTestData = () => {
    setBusinessData({
      businessName: 'Sunrise Family Dental',
      industry: 'healthcare',
      reviewLink: 'https://g.page/r/sunrise-family-dental/review',
      customerName: 'Sarah Johnson',
      service: 'teeth cleaning and whitening consultation',
    })
    setScenario('just-completed')
    setTone('friendly')
    setChannel('email')
    setFollowUpEnabled(true)
  }

  return (
    <div className="bg-abyss bg-glow bg-grid min-h-screen">
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 py-8 sm:py-12 animate-fadeIn">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-galactic">
          <a href="https://seo-tools-tau.vercel.app/" className="text-azure hover:text-white transition-colors">Free Tools</a>
          <span className="mx-2 text-metal">/</span>
          <a href="https://seo-tools-tau.vercel.app/local-business/" className="text-azure hover:text-white transition-colors">Local Business Tools</a>
          <span className="mx-2 text-metal">/</span>
          <span className="text-cloudy">Review Request Template Builder</span>
        </nav>

        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-azure" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Review Request Template Builder</h1>
              <p className="text-cloudy text-sm sm:text-base mt-1">
                Generate customized review request messages for every channel — email, SMS, in-person scripts, and printable cards with QR codes.
              </p>
            </div>
          </div>
        </header>

        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={fillTestData}
            className="px-3 py-1.5 text-xs font-mono bg-prince/20 text-prince border border-prince/30 rounded hover:bg-prince/30 transition-colors focus:outline-none focus:ring-2 focus:ring-prince focus:ring-offset-2 focus:ring-offset-abyss"
          >
            Fill Test Data
          </button>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          {/* Setup Section */}
          <BusinessSetup data={businessData} onChange={setBusinessData} />

          {/* Options row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScenarioSelector selected={scenario} onSelect={setScenario} />
            <div className="space-y-6">
              <ToneSelector selected={tone} onSelect={setTone} />
              <ChannelTabs selected={channel} onSelect={setChannel} />
            </div>
          </div>

          {/* Template Output */}
          <TemplateOutput
            channel={channel}
            scenario={scenario}
            tone={tone}
            businessData={businessData}
          />

          {/* Follow-Up Sequence (email and SMS only) */}
          <FollowUpSequence
            channel={channel}
            tone={tone}
            businessData={businessData}
            enabled={followUpEnabled}
            onToggle={() => setFollowUpEnabled(!followUpEnabled)}
          />

          {/* QR Code Generator */}
          <QRCodeGenerator reviewLink={businessData.reviewLink} />

          {/* Printable Card */}
          <PrintableCard businessData={businessData} />
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-metal/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-galactic">
            <p>
              Built by{' '}
              <a href="https://www.dreamhost.com" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-white transition-colors">
                DreamHost
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a href="https://seo-tools-tau.vercel.app/" className="text-azure hover:text-white transition-colors">
                All Free Tools
              </a>
              <a href="https://seo-tools-tau.vercel.app/local-business/" className="text-azure hover:text-white transition-colors">
                Local Business Tools
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
