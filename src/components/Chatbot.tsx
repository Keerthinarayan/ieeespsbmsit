import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<string[]>([]);
  const [userName, setUserName] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            text: "👋 Hi there! I'm your IEEE SPS assistant! I'd love to help you explore everything about our community. What's your name?",
            isBot: true
          }
        ]);
      }, 500);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInputText('');
    setIsTyping(true);
    setContext(prev => [...prev, userMessage]);

    setTimeout(() => {
      let response: string;
      
      if (!userName) {
        const name = extractName(userMessage);
        setUserName(name);
        response = `Nice to meet you, ${name}! 😊 I'm here to help you with:\n\n🎯 Events and activities\n📚 Membership benefits\n🌟 Our vision & mission\n🤝 Networking opportunities\n👥 Team information\n🌐 Social connections\n\nWhat would you like to know about?`;
      } else {
        response = getBotResponse(userMessage, context, userName);
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setContext(prev => [...prev, response]);

      if (userMessage.toLowerCase().match(/\b(bye|goodbye|see you|farewell)\b/)) {
        setTimeout(() => setIsOpen(false), 2000);
      }
    }, Math.random() * 500 + 500);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const extractName = (input: string): string => {
    const cleanInput = input.toLowerCase()
      .replace(/^(hi|hello|hey|my name is|i am|i'm)\s+/i, '')
      .replace(/[^a-zA-Z\s]/g, '')
      .trim();
    
    return cleanInput.split(' ')[0].charAt(0).toUpperCase() + 
           cleanInput.split(' ')[0].slice(1).toLowerCase();
  };

  const getBotResponse = (input: string, context: string[], userName: string): string => {
    const lowerInput = input.toLowerCase();
    
    // What is IEEE?
    if (lowerInput.includes('what is ieee') || lowerInput.includes('ieee')) {
      return `${userName}, IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. 🌍\n\n🔧 Key Areas:\n- Electrical Engineering\n- Electronics\n- Computer Science\n- Information Technology\n\n🌟 Mission:\n- Foster technological innovation\n- Develop standards\n- Provide educational resources\n\n💡 Fun Fact:\nIEEE publishes nearly a third of the world's technical literature in electrical engineering, computer science, and electronics! 📚`;
    }

    // What is SPS?
    if (lowerInput.includes('what is sps') || lowerInput.includes('sps')) {
      return `${userName}, SPS stands for Signal Processing Society, a technical society within IEEE. �\n\n🎯 Focus Areas:\n- Signal Processing Theory\n- Machine Learning\n- Image & Video Processing\n- Speech & Audio Processing\n\n🌟 Mission:\n- Advance signal processing technology\n- Foster collaboration\n- Provide educational resources\n\n💡 Fun Fact:\nSPS organizes numerous conferences and workshops worldwide, bringing together experts from academia and industry! 🌐`;
    }

    // Why join IEEE SPS?
    if (lowerInput.includes('why join') || lowerInput.includes('benefits of joining') || lowerInput.includes('why should i join')) {
      return `${userName}, joining IEEE SPS comes with a plethora of benefits! 🌟\n\n🎯 Professional Growth:\n- Access to cutting-edge research\n- Networking with industry experts\n- Career development opportunities\n\n📚 Educational Resources:\n- Workshops & tutorials\n- Online courses\n- Technical publications\n\n🌐 Community:\n- Global network of professionals\n- Collaborative projects\n- Mentorship programs\n\n💡 Fun Fact:\nIEEE SPS members get exclusive discounts on conferences and publications! 📖`;
    }

    // Membership information
    if (lowerInput.includes('member') || lowerInput.includes('join') || lowerInput.includes('subscription')) {
      return `${userName}, let me tell you about our awesome membership benefits! 🌟\n\n📚 Member Benefits:\n- Access to IEEE Xplore Digital Library\n- Networking with industry experts\n- Exclusive workshops & events\n- Technical resources & publications\n- Career development opportunities\n\n💰 Student Membership:\n- Special student discount\n- Only 1450/year for students\n- Additional SPS membership: 45/year\n\n🎁 Bonus Perks:\n- Free online courses\n- Conference discounts\n- Resume building workshops\n\n🔗 Ready to join? Visit:\nhttps://bmsit-ieee.github.io/sps/Membership_Drive/front.html\n\nNeed help with registration? Just ask! 😊`;
    }

    // Vision and Mission
    if (lowerInput.includes('vision') || lowerInput.includes('mission') || lowerInput.includes('about')) {
      return `${userName}, let me share our inspiring vision and mission! 🚀\n\n🎯 Our Vision:\n"To be the premier global technical society in signal processing, serving the world through technological innovation."\n\n🌟 Our Mission:\n1. Advance Technology:\n   - Drive innovation in signal processing\n   - Foster cutting-edge research\n\n2. Build Community:\n   - Connect global experts\n   - Support student growth\n\n3. Enable Learning:\n   - Provide educational resources\n   - Organize workshops & training\n\n💫 Our Values:\n- Innovation\n- Collaboration\n- Excellence\n- Diversity\n\nWant to know more about any specific aspect? 😊`;
    }

    // Social Media and Connections
    if (lowerInput.includes('social') || lowerInput.includes('follow') || lowerInput.includes('connect') || lowerInput.includes('instagram') || lowerInput.includes('linkedin') || lowerInput.includes('whatsapp')) {
      return `${userName}, let's get you connected with our community! 🌐\n\n📱 Social Media:\n\n📸 Instagram:\n@sps_bmsit\nhttps://www.instagram.com/sps_bmsit\n- Event updates\n- Live coverage\n- Student achievements\n\n💼 LinkedIn:\nIEEE SPS BMSIT&M\nhttps://www.linkedin.com/in/ieeespsbmsitm\n- Professional networking\n- Industry insights\n- Career opportunities\n\n💬 WhatsApp Community:\nhttps://chat.whatsapp.com/JImyalLUCR8DVpg86jOdYM\n- Instant updates\n- Event notifications\n- Community discussions\n\nJoin us on all platforms to stay updated! 🎉`;
    }

    // Upcoming Events with registration
    if (lowerInput.includes('event') || lowerInput.includes('workshop') || lowerInput.includes('upcoming')) {
      return `${userName}, check out our exciting upcoming events! 🎉\n\n🚀 Decode X 2025 (MAY 15-17)\n- Technical competitions\n- Expert talks\n- Project showcase\nRegister: https://forms.gle/YourFormLink\n\n🤖 AI Workshop (July 8)\n- Hands-on sessions\n- Industry experts\nRegister: https://forms.gle/AnotherFormLink\n\n📅 Regular Activities:\n- Technical Thursdays\n- Industry Connect Sessions\n- Hands-on Workshops\n\nWant to register for any event? Let me help! 😊`;
    }

    // Team Information
    if (lowerInput.includes('team') || lowerInput.includes('committee') || lowerInput.includes('who')) {
      return `Let me introduce you to our amazing team, ${userName}! 🌟\n\n👨‍🏫 Faculty Advisor:\n- Dr. Saneesh (Our awesome mentor!)\n\n👥 Student Leaders:\n- Sourabh K H (Chair) - Leading with vision\n- Smriti (Vice Chair) - Our energetic organizer\n- Maanya (Secretary) - Keeping everything running smoothly\n- Chinamy Bhat (Treasurer) - Managing our resources\n\n🎨 Creative Team:\n- Keerthi Narayan & Deepak Reddy (Webmasters)\n- Vikas (Spectrum Volcom Head)\n- Susan Tiji Varghese (Signal Volcom Head)\n\nWant to connect with any team member? Just ask! 🤝`;
    }

    // Contact Information
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email')) {
      return `${userName}, here's how you can reach us! 📬\n\n✉️ Email:\n- ieee@bmsit.in\n- ieeespsbmsit@gmail.com\n\n📞 Phone:\n- Smriti (Vice Chair): 73892 96975\n- Chinmay Bhat (Treasurer): 86189 78745\n\n📍 Location:\nBMS Institute of Technology & Management\nAvalon Campus, Yelahanka\nBengaluru - 560064\n\nFeel free to reach out anytime! 😊`;
    }

    // Greetings
    if (lowerInput.match(/\b(hi|hello|hey|greetings)\b/)) {
      return `Hey ${userName}! 👋 Great to see you! How can I help you today? I can tell you about:\n\n🎯 Upcoming events\n📚 Membership benefits\n🌟 Our vision & mission\n🤝 Networking opportunities\n🌐 Social media\n\nWhat would you like to explore? 😊`;
    }

    // Goodbye
    if (lowerInput.match(/\b(bye|goodbye|see you|farewell)\b/)) {
      return `Take care, ${userName}! 👋 Thanks for chatting! Don't forget to follow us on Instagram (@sps_bmsit) and LinkedIn for updates. Hope to see you at our next event! 😊`;
    }

    // Thank you
    if (lowerInput.match(/\b(thanks|thank you|thx)\b/)) {
      return `You're welcome, ${userName}! 😊 Always happy to help! Don't forget to join our WhatsApp community for instant updates. Anything else you'd like to know? 🌟`;
    }

    // Help
    if (lowerInput.includes('help') || lowerInput.includes('confused')) {
      return `No worries, ${userName}! 😊 I can help you with:\n\n🎯 Event details & registration\n📚 Membership benefits\n🌟 Vision & mission\n🤝 Networking opportunities\n👥 Team information\n🌐 Social media connections\n\nWhat interests you? 💫`;
    }

    // Default response
    return `Hey ${userName}! 🤔 I see you're interested in ${input.toLowerCase().split(' ').slice(-3).join(' ')}. Let me help you better!\n\nWe could talk about:\n🎯 Exciting events\n📚 Membership benefits\n🌟 Our vision & mission\n🤝 Networking\n🌐 Social media\n\nWhat would you like to know more about? 😊`;
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed left-4 bottom-4 z-50 p-3 rounded-full shadow-lg transition-colors duration-200 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed left-4 bottom-20 z-50 w-[calc(100%-2rem)] sm:w-[350px] bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-sm">IEEE SPS Assistant</h3>
                  <p className="text-xs text-blue-100">Let's chat! 😊</p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-[350px] overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-2 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-gray-800 dark:text-gray-200'
                        : 'bg-gradient-to-r from-green-600 to-blue-600 text-white'
                    }`}
                  >
                    <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex space-x-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 w-16"
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-2 h-2 rounded-full bg-gray-400"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: dot * 0.1
                      }}
                    />
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 text-sm border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="p-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
