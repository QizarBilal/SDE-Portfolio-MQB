"use client"
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiPaperAirplane } from 'react-icons/hi'
import { generateResponse } from '@/lib/chatbotKnowledge'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Mohammed's AI assistant. Ask me anything about his experience, education, skills, or projects!",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      type: 'user',
      text: input,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateResponse(input)
      const botMessage = {
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    "What's his experience?",
    "Tell me about his skills",
    "What projects has he built?",
    "What's his education?",
    "Is he available for hire?"
  ]

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:shadow-accent-green/20 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-green to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white/20">
          <img
            src="/Portrait.png"
            alt="Ask me anything"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="hidden w-full h-full bg-accent-green items-center justify-center text-white text-xl font-bold">
            MQ
          </div>
        </div>
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-accent-green animate-ping opacity-20" />
      </motion.button>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-6 right-6 w-[420px] h-[600px] glass-strong rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-white/10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-accent-green to-cyan-500 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                    <img
                      src="/Portrait.png"
                      alt="Mohammed Qizar Bilal"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="hidden w-full h-full bg-white/20 items-center justify-center text-white text-sm font-bold">
                      MQ
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Mohammed's AI Assistant</h3>
                    <p className="text-white/80 text-xs">Ask me anything!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <HiX className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-bg-surface/50 to-bg-base/50">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                        message.type === 'user'
                          ? 'bg-accent-green text-white rounded-br-sm'
                          : 'glass rounded-bl-sm text-text-primary'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      <p className={`text-[10px] mt-1 ${message.type === 'user' ? 'text-white/70' : 'text-text-muted'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="glass rounded-2xl rounded-bl-sm px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="px-4 py-2 border-t border-white/5">
                  <p className="text-xs text-text-muted mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.slice(0, 3).map((question, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setInput(question)
                          setTimeout(handleSend, 100)
                        }}
                        className="px-3 py-1.5 bg-white/5 hover:bg-accent-green/20 border border-white/10 hover:border-accent-green/30 rounded-full text-xs text-text-muted hover:text-accent-green transition-all"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-white/5 bg-bg-surface/80 backdrop-blur-sm">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about experience, skills, projects..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-green/50 focus:bg-white/10 transition-all"
                  />
                  <motion.button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-accent-green hover:bg-accent-green/90 disabled:bg-white/10 disabled:cursor-not-allowed rounded-xl transition-colors"
                  >
                    <HiPaperAirplane className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
