"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

const providers = ["Aetna", "Kaiser Permanente", "Blue Shield", "Anthem", "UnitedHealthcare", "Health Net"]
const plans = ["CA Bronze HMO $60/95 5800 M", "CA Bronze HMO $75/125 8550", "Silver PPO 4500", "Gold HMO 2000"]
const avatars = ["🐿️", "🐻", "🐰", "🦊", "🦁", "🐼"]

export default function OnboardingWizard() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    provider: '',
    plan: '',
    dob: '',
    sex: '',
    avatar: '🐿️',
    file: null as File | null,
    familyMembers: [] as any[]
  })
  const [isParsing, setIsParsing] = useState(false)

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData({ ...formData, file })
      
      // Simulate parsing
      setIsParsing(true)
      setTimeout(() => setIsParsing(false), 2000)
    }
  }

  const handleFinish = async () => {
    // In a real app, submit data to backend
    console.log("Submitting:", formData)
    router.push('/dashboard')
  }

  return (
    <div className="w-full max-w-md mx-auto relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-[var(--card-dark)] border-none shadow-2xl text-white">
            <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
              
              {/* Mascot & Greeting */}
              <div className="text-6xl mb-4">{formData.avatar}</div>

              {step === 1 && (
                <>
                  <h2 className="text-3xl font-bold">Hi there!</h2>
                  <p className="text-gray-300">What's your name?</p>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-center text-lg h-12"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <Button 
                    className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white py-6 text-lg rounded-xl mt-4"
                    onClick={handleNext}
                    disabled={!formData.name}
                  >
                    Continue
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold">Hello {formData.name}!</h2>
                  <p className="text-gray-300">Let's find your plan</p>
                  
                  <div className="w-full space-y-4">
                    <select 
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                    >
                      <option value="" disabled>Select State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                    </select>

                    <select 
                      className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                      value={formData.provider}
                      onChange={(e) => setFormData({...formData, provider: e.target.value})}
                    >
                      <option value="" disabled>Select Insurance Provider</option>
                      {providers.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>

                    {formData.provider && (
                      <select 
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                        value={formData.plan}
                        onChange={(e) => setFormData({...formData, plan: e.target.value})}
                      >
                        <option value="" disabled>Select Specific Plan</option>
                        {plans.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    )}
                  </div>

                  <div className="flex gap-4 w-full mt-4">
                    <Button variant="ghost" onClick={handleBack} className="flex-1 text-white/70">Back</Button>
                    <Button 
                      className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary)]/80 py-6"
                      onClick={handleNext}
                      disabled={!formData.plan}
                    >
                      Continue
                    </Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl font-bold">Last step!</h2>
                  <p className="text-gray-300">Tell us more for better accuracy!</p>

                  <div className="w-full space-y-4 text-left">
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Date of Birth</label>
                      <Input 
                        type="date"
                        className="bg-white/10 border-white/20 text-white"
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Sex</label>
                      <div className="flex bg-white/10 rounded-lg p-1">
                        {['F', 'M', 'X'].map((s) => (
                          <button
                            key={s}
                            className={`flex-1 py-2 rounded-md transition-colors ${formData.sex === s ? 'bg-[var(--primary)] text-white' : 'text-gray-400 hover:text-white'}`}
                            onClick={() => setFormData({...formData, sex: s})}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Choose Your Avatar</label>
                      <div className="flex justify-between gap-2 overflow-x-auto pb-2">
                        {avatars.map((a) => (
                          <button
                            key={a}
                            className={`text-2xl p-2 rounded-full transition-transform hover:scale-110 ${formData.avatar === a ? 'bg-white/20 ring-2 ring-[var(--primary)]' : ''}`}
                            onClick={() => setFormData({...formData, avatar: a})}
                          >
                            {a}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:bg-white/5 transition-colors cursor-pointer relative">
                      <input 
                        type="file" 
                        accept=".pdf" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileUpload}
                      />
                      <div className="space-y-2">
                        <div className="text-4xl text-[var(--muted)]">📄</div>
                        {formData.file ? (
                          <div className="text-sm font-medium text-[var(--success)]">
                            {formData.file.name}
                            {isParsing && <span className="block text-xs text-white/50 animate-pulse">Parsing document...</span>}
                          </div>
                        ) : (
                          <>
                            <p className="text-sm font-medium">Upload Insurance Document</p>
                            <p className="text-xs text-gray-400">PDF only (Max 5MB)</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 w-full mt-4">
                    <Button variant="ghost" onClick={handleBack} className="flex-1 text-white/70">Back</Button>
                    <Button 
                      className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary)]/80 py-6"
                      onClick={handleNext}
                      disabled={!formData.dob || !formData.sex}
                    >
                      Done
                    </Button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h2 className="text-2xl font-bold">Family Members?</h2>
                  <p className="text-gray-300">Would you like to add anyone else?</p>

                  <div className="w-full space-y-3">
                    {/* Add User Button */}
                    <Button variant="outline" className="w-full py-8 border-dashed border-white/30 hover:bg-white/5 text-gray-300">
                      + Add Family Member
                    </Button>
                    
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-[var(--success)] hover:bg-[var(--success)]/90 text-white py-6 text-lg rounded-xl"
                        onClick={handleFinish}
                      >
                        Finish Setup
                      </Button>
                    </div>
                  </div>
                </>
              )}

            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {[1, 2, 3, 4].map((s) => (
          <div 
            key={s} 
            className={`w-2 h-2 rounded-full transition-colors ${step === s ? 'bg-white' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  )
}
