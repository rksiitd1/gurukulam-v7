import { motion } from "framer-motion"
import { Heart, Shield, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface DonationLoadingProps {
  message?: string
  className?: string
}

export function DonationLoading({ 
  message = "Preparing your donation experience...", 
  className 
}: DonationLoadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 px-6", className)}>
      {/* Animated Logo/Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
          <Heart className="w-10 h-10 text-white" />
        </div>
        
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-orange-300"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Loading Message */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {message}
        </h3>
        <p className="text-gray-600 text-sm">
          Setting up secure payment processing...
        </p>
      </motion.div>

      {/* Security Indicators */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center space-x-6 mt-8"
      >
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-600">SSL Secured</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-gray-600">80G Certified</span>
        </div>
      </motion.div>

      {/* Progress Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex space-x-2 mt-6"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-orange-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
