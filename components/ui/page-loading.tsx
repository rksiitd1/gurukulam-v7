import { motion } from "framer-motion"
import { BookOpen, GraduationCap, Heart, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageLoadingProps {
  title?: string
  subtitle?: string
  className?: string
}

export function PageLoading({ 
  title = "Loading...", 
  subtitle = "Preparing your experience",
  className 
}: PageLoadingProps) {
  const icons = [BookOpen, GraduationCap, Heart, Users]
  
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-[400px] py-16 px-6", className)}>
      {/* Animated Icons */}
      <div className="relative mb-8">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0.8, 
              opacity: 0 
            }}
            animate={{ 
              x: Math.cos(index * Math.PI / 2) * 40,
              y: Math.sin(index * Math.PI / 2) * 40,
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        ))}
        
        {/* Center Logo */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-xl"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Heart className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600">
          {subtitle}
        </p>
      </motion.div>

      {/* Devanagari Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-4"
      >
        <p className="text-orange-600 font-devanagari text-lg">
          ज्ञानं परमं ध्येयम्
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Knowledge is the ultimate goal
        </p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
        className="w-64 h-1 bg-gray-200 rounded-full mt-8 overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  )
}
