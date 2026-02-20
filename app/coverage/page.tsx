"use client"

import { useState } from 'react'
import BottomNav from '@/components/BottomNav'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X, Shield, Plus, Minus, Stethoscope, Pill, Ambulance, Hospital, Activity } from 'lucide-react'

const coverageData = {
  Covered: [
    { title: "Doctor Visits", icon: Stethoscope, percentage: 90, desc: "Office visits to PCP/general physician for illness or injury." },
    { title: "Prescriptions", icon: Pill, percentage: 90, desc: "Generic and brand-name drugs on the formulary." },
    { title: "Emergency Care", icon: Ambulance, percentage: 80, desc: "Emergency room services and ambulance transport." },
    { title: "Hospital Care", icon: Hospital, percentage: 80, desc: "Inpatient hospital stays and surgeries." },
    { title: "Preventive Care", icon: Activity, percentage: 100, desc: "Annual checkups, screenings, and immunizations." },
  ],
  "Not Covered": [
    { title: "Cosmetic Surgery", icon: X, desc: "Elective cosmetic procedures." },
    { title: "Adult Dental", icon: X, desc: "Routine dental care for adults (unless separate rider)." },
    { title: "Vision Correction", icon: X, desc: "Glasses and contact lenses (unless separate rider)." },
  ],
  Costs: [
    { title: "Deductible", amount: "$2,000", desc: "Amount you pay before insurance kicks in." },
    { title: "OOP Max", amount: "$6,500", desc: "Maximum you will pay in a year." },
    { title: "PCP Copay", amount: "$20", desc: "Cost per visit to primary care." },
    { title: "Specialist Copay", amount: "$40", desc: "Cost per visit to a specialist." },
  ]
}

export default function CoveragePage() {
  const [activeTab, setActiveTab] = useState('Covered')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="bg-[var(--deep-purple)] text-white p-6 pb-20 rounded-b-3xl shadow-lg relative overflow-hidden">
        <h1 className="text-3xl font-bold mb-1 relative z-10">Coverage Details</h1>
        <p className="opacity-80 relative z-10">Aetna HMO Silver</p>
        <div className="absolute top-4 right-4 text-4xl opacity-20 rotate-12">📄</div>
      </div>

      <div className="px-4 -mt-12 relative z-20">
        
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md p-1 flex mb-6">
          {Object.keys(coverageData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab 
                  ? 'bg-[var(--primary)] text-white shadow-sm' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-3">
          {coverageData[activeTab as keyof typeof coverageData].map((item: any, i: number) => (
            <Card 
              key={i} 
              className={`border-none shadow-sm transition-all ${expandedItem === item.title ? 'ring-2 ring-[var(--primary)]' : ''}`}
            >
              <CardContent className="p-0">
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedItem(expandedItem === item.title ? null : item.title)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.percentage ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                      {item.icon ? <item.icon size={20} /> : <Shield size={20} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      {item.percentage && <span className="text-xs font-bold text-[var(--success)]">{item.percentage}% Covered</span>}
                      {item.amount && <span className="text-xs font-bold text-[var(--primary)]">{item.amount}</span>}
                    </div>
                  </div>
                  {expandedItem === item.title ? <Minus size={16} className="text-gray-400" /> : <Plus size={16} className="text-gray-400" />}
                </div>
                
                {expandedItem === item.title && (
                  <div className="px-4 pb-4 pt-0 text-sm text-gray-600 border-t border-gray-100 mt-2 bg-gray-50/50 rounded-b-lg">
                    <p className="mt-2">{item.desc}</p>
                    {item.percentage && (
                      <div className="mt-3 flex items-center gap-2 text-xs font-bold text-[var(--primary)]">
                        <Check size={14} /> In-Network Only
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>

      <BottomNav />
    </div>
  )
}
