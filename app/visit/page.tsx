import BottomNav from '@/components/BottomNav'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, DollarSign, Stethoscope, CheckCircle, Info } from 'lucide-react'

export default function CostEstimator() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="bg-[var(--deep-purple)] text-white p-6 pb-8 rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-20%] w-64 h-64 bg-[var(--primary)] rounded-full blur-3xl opacity-50" />
        <h1 className="text-3xl font-bold mb-1 relative z-10">Your Visit</h1>
        <div className="flex items-baseline gap-2 relative z-10">
          <span className="text-sm opacity-80">Estimated Cost:</span>
          <span className="text-4xl font-bold text-[var(--success)]">$45</span>
        </div>
        <div className="absolute top-4 right-4 text-4xl animate-bounce-slow">🐿️</div>
      </div>

      <div className="p-4 space-y-6 -mt-6 relative z-10">
        
        {/* Provider Card */}
        <Card className="bg-white shadow-lg border-none overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white pb-2 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg font-bold text-gray-900">Dr. Angela Martin</CardTitle>
                <p className="text-sm text-gray-500">Pediatrician • 2.4 miles away</p>
              </div>
              <div className="bg-[var(--badge-in-network)]/10 text-[var(--badge-in-network)] px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <CheckCircle size={12} /> In-Network
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Stethoscope size={16} className="text-[var(--primary)]" />
              <span>Pediatric Check-up for Rumi Ahmad</span>
            </div>
            
            <div className="h-32 bg-gray-200 rounded-lg overflow-hidden relative">
              {/* Fake Map */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-xs">
                [Interactive Map Placeholder]
              </div>
              <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded shadow text-xs font-bold flex items-center gap-1">
                <MapPin size={12} /> 123 Health Way, SF
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-1 text-gray-600"><CheckCircle size={12} className="text-green-500"/> Deductible Met</span>
                <span className="font-bold text-gray-900">Yes</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Co-Pay</span>
                <span className="font-bold text-gray-900">$20.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Co-Insurance (10%)</span>
                <span className="font-bold text-gray-900">$25.00</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-[var(--primary)]">
                <span>Total User Pay</span>
                <span>$45.00</span>
              </div>
            </div>

            <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white">
              Schedule Appointment
            </Button>
          </CardContent>
        </Card>

        {/* Other Providers */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Other In-Network Options</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="p-3 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">👩‍⚕️</div>
                    <div>
                      <h4 className="font-bold text-sm">Dr. Sarah Smith</h4>
                      <p className="text-xs text-gray-500">General Practice • 5 mi</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-[var(--success)]">$45</span>
                    <span className="text-[10px] text-gray-400">Est. Cost</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  )
}
