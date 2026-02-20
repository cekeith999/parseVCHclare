"use client"

import { useState } from 'react'
import BottomNav from '@/components/BottomNav'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, User, Bot, Sparkles } from 'lucide-react'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Hi! I\'m Parse. What can I optimize for you today?' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = { id: Date.now(), role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMsg = { 
        id: Date.now() + 1, 
        role: 'assistant', 
        content: "Based on your Aetna plan, generic prescriptions have a $10 copay. If you switch your maintenance medication to a 90-day supply via mail order, you could save approximately $40 per year." 
      }
      setMessages(prev => [...prev, aiMsg])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 flex flex-col">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm sticky top-0 z-10 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[var(--primary)] flex items-center gap-2">
            Ask Parse <Sparkles size={16} className="text-[var(--accent)]" />
          </h1>
          <p className="text-xs text-gray-500">Your insurance optimization assistant</p>
        </div>
        <div className="text-3xl">🐿️</div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--deep-purple)] text-white'}`}>
              {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            
            <div 
              className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-[var(--primary)] text-white rounded-tr-none' 
                  : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-2 text-gray-400 text-xs ml-12">
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75" />
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150" />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200 sticky bottom-[60px]">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your plan..." 
            className="flex-1 rounded-full bg-gray-100 border-transparent focus:bg-white transition-colors pl-4"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="rounded-full w-10 h-10 bg-[var(--primary)] hover:bg-[var(--primary)]/90 shrink-0"
            disabled={!input.trim() || isTyping}
          >
            <Send size={18} />
          </Button>
        </form>
      </div>

      <BottomNav />
    </div>
  )
}
