import OnboardingWizard from '@/components/OnboardingWizard'

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--deep-purple)] to-[var(--primary)] text-white flex items-center justify-center p-4">
      <OnboardingWizard />
    </div>
  )
}
