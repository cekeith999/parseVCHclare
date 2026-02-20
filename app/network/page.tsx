import BottomNav from '@/components/BottomNav'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Navigation } from 'lucide-react'

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 flex flex-col">
      
      {/* Header */}
      <div className="bg-white p-4 shadow-sm z-10 sticky top-0">
        <h1 className="text-xl font-bold mb-2">Find Care</h1>
        <div className="relative">
          <Input 
            placeholder="Search doctors, specialties..." 
            className="pl-10 bg-gray-100 border-none rounded-xl"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl opacity-20">
          Interactive Map
        </div>
        
        {/* Pins */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold animate-bounce">
            <Stethoscope size={16} />
          </div>
        </div>
        <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">
            <Stethoscope size={16} />
          </div>
        </div>
        
        {/* User Location */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
        </div>
      </div>

      {/* Provider List Overlay */}
      <div className="bg-white rounded-t-3xl shadow-negative-lg -mt-6 relative z-10 p-4 pb-20 space-y-4">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2" />
        <h3 className="font-bold text-gray-900">Nearby In-Network</h3>
        
        {[1, 2, 3].map((i) => (
          <Card key={i} className="shadow-sm border border-gray-100">
            <CardContent className="p-3 flex gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center text-2xl">
                👨‍⚕️
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm truncate">Dr. James Wilson</h4>
                <p className="text-xs text-gray-500">Cardiology • 1.2 mi</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">In-Network</span>
                  <span className="text-[10px] text-gray-400">Next: Tue 2:00 PM</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <button className="w-8 h-8 bg-[var(--primary)]/10 rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors">
                  <Navigation size={16} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

function Stethoscope({ size, className }: { size?: number, className?: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size || 24} 
            height={size || 24} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
            <circle cx="20" cy="10" r="2" />
        </svg>
    )
}
