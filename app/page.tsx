import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--deep-purple)] to-[var(--primary)] text-white flex flex-col items-center justify-center p-6 text-center">
      <main className="max-w-4xl w-full flex flex-col items-center gap-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Parse
          </h1>
          <p className="text-xl md:text-2xl font-light text-[var(--muted)] max-w-2xl mx-auto">
            Health insurance shouldn't feel like a foreign language.
          </p>
          <div className="pt-4">
            {/* Mascot Placeholder */}
            <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
              🐿️
            </div>
            <Link href="/onboarding">
              <Button size="lg" className="text-lg px-12 py-6 rounded-full bg-white text-[var(--primary)] hover:bg-gray-100">
                Get Started — It's Free
              </Button>
            </Link>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="grid md:grid-cols-3 gap-8 text-center py-12">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-2">⅓</h3>
            <p className="text-sm opacity-90">of insured adults don't understand their coverage.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-2">58%</h3>
            <p className="text-sm opacity-90">experience problems using their insurance.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-2">94%</h3>
            <p className="text-sm opacity-90">want simpler, easier-to-read statements.</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full text-left">
          <h2 className="text-3xl font-bold mb-8 text-center">What Does Parse Do?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Reads Coverage Docs", desc: "Upload your policy PDF and Parse breaks it down in plain English." },
              { title: "Calculate Costs", desc: "Know what you'll pay before you go to the doctor." },
              { title: "View Amount Claimed", desc: "Track how much of your deductible and OOP you've used." },
              { title: "Family-Focused", desc: "Manage coverage for every family member in one place." },
              { title: "Understand Exclusions", desc: "Discover hidden caveats and what's NOT covered." },
              { title: "Tracks History", desc: "See your claims, visits, and spending over time." },
            ].map((feature, i) => (
              <div key={i} className="bg-[var(--card-dark)] p-6 rounded-xl border border-white/10">
                <h3 className="font-bold text-lg mb-2 text-[var(--accent)]">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-20 text-sm text-white/50">
        <p>© 2026 Parse. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
