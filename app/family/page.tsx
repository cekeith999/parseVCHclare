"use client"

import { useState } from 'react'
import BottomNav from '@/components/BottomNav'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Plus, UserPlus } from 'lucide-react'

export default function FamilyPage() {
  const [selectedUser, setSelectedUser] = useState('Parent')
  const [users, setUsers] = useState([
    { id: '1', name: 'Parent', role: 'Mother', avatar: '👩', primary: true },
    { id: '2', name: 'Rumi', role: 'Daughter', avatar: '🐿️', primary: false },
    { id: '3', name: 'Turtlie', role: 'Son', avatar: '🐢', primary: false },
  ])

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="bg-[var(--deep-purple)] text-white p-6 pb-8 rounded-b-3xl shadow-lg relative overflow-hidden">
        <h1 className="text-3xl font-bold mb-2 relative z-10">Select User</h1>
        <p className="opacity-80 relative z-10">Who are we optimizing for today?</p>
        <div className="absolute top-4 right-4 text-4xl opacity-20 rotate-12">👨‍👩‍👧‍👦</div>
      </div>

      <div className="p-4 space-y-4 -mt-6 relative z-10">
        
        {users.map((user) => (
          <Card 
            key={user.id} 
            className={`cursor-pointer transition-all ${selectedUser === user.name ? 'ring-2 ring-[var(--primary)] shadow-lg scale-[1.02]' : 'hover:bg-gray-50'}`}
            onClick={() => setSelectedUser(user.name)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-4xl shadow-inner border border-gray-200">
                  {user.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
              
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedUser === user.name ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'border-gray-300'}`}>
                {selectedUser === user.name && <Check size={14} />}
              </div>
            </CardContent>
          </Card>
        ))}

        <Button 
          variant="outline" 
          className="w-full py-8 border-dashed border-gray-300 hover:bg-gray-50 text-gray-500 gap-2 text-lg font-medium"
        >
          <Plus size={24} /> Add Family Member
        </Button>

      </div>

      <BottomNav />
    </div>
  )
}
