import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, ShieldCheck, Stethoscope, Search } from 'lucide-react'
import BottomNav from '@/components/BottomNav'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-b from-[var(--deep-purple)] to-[var(--primary)] text-white p-6 pb-12 rounded-b-[2rem] shadow-xl relative overflow-hidden">
        
        {/* Background Decorations */}
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-[var(--accent)]/20 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold">Hi Parent,</h1>
              <p className="text-white/80">How is <span className="font-semibold text-[var(--accent)]">Rumi</span> Feeling?</p>
            </div>
            <div className="text-5xl">🐿️</div>
          </div>

          {/* Deductible Progress */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <div className="flex justify-between text-sm mb-2 opacity-90">
              <span>Deductible Progress</span>
              <span className="font-mono">$1,200 of $2,000</span>
            </div>
            <div className="h-4 w-full bg-black/20 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-blue-400 to-[var(--accent)] rounded-full" />
            </div>
            <p className="text-xs text-right mt-1 opacity-70">Reset in 45 days</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 -mt-8 relative z-20">
        
        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white shadow-md border-none">
            <CardContent className="p-4 flex flex-col items-center text-center gap-2">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
                <Bell size={20} />
              </div>
              <h3 className="font-bold text-sm">Reminders</h3>
              <p className="text-xs text-gray-500">2 Free Pediatric Checkups Left</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md border-none">
            <CardContent className="p-4 flex flex-col items-center text-center gap-2">
              <div className="p-2 bg-green-100 text-green-600 rounded-full">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-sm">Active Policy</h3>
              <p className="text-xs text-gray-500">Aetna HMO<br/>OOP: $1,400</p>
            </CardContent>
          </Card>
        </div>

        {/* Talk to Parse Section */}
        <Card className="bg-[var(--card-dark)] text-white border-none shadow-lg overflow-hidden">
          <CardHeader className="bg-white/5 pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <span>Talk to Parse</span>
              <span className="text-xl">🤖</span>
            </CardTitle>
            <p className="text-sm text-gray-300">Tell me how you're feeling...</p>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <div className="relative mb-4">
              <Input 
                placeholder="Ask anything..." 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10 h-12 rounded-xl"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {["In-Network", "Co-pay", "Deductible", "Telehealth"].map(chip => (
                <button key={chip} className="whitespace-nowrap px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-xs transition-colors border border-white/10">
                  {chip}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-3">
          <Link href="/visit">
            <Button className="w-full justify-between h-auto py-4 px-6 bg-white text-[var(--primary)] hover:bg-gray-50 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[var(--primary)]/10 rounded-full text-[var(--primary)]">
                  <Stethoscope size={24} />
                </div>
                <div className="text-left">
                  <span className="block font-bold">Estimate a Visit</span>
                  <span className="text-xs text-gray-500">Check costs before you go</span>
                </div>
              </div>
              <span className="text-gray-300">→</span>
            </Button>
          </Link>
        </div>

      </div>

      <BottomNav />
    </div>
  )
}
