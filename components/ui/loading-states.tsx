import { motion } from "framer-motion"
import { Heart, BookOpen, GraduationCap, Users, Home, Award } from "lucide-react"
import { cn } from "@/lib/utils"

// Main loading component with different variants
interface LoadingStateProps {
  variant?: "page" | "section" | "card" | "form" | "payment"
  title?: string
  subtitle?: string
  className?: string
}

export function LoadingState({ 
  variant = "page", 
  title, 
  subtitle, 
  className 
}: LoadingStateProps) {
  const variants = {
    page: {
      component: PageLoading,
      defaultTitle: "Loading...",
      defaultSubtitle: "Preparing your experience"
    },
    section: {
      component: SectionLoading,
      defaultTitle: "Loading Content",
      defaultSubtitle: "Please wait while we prepare this section"
    },
    card: {
      component: CardLoading,
      defaultTitle: "Loading",
      defaultSubtitle: "Preparing content"
    },
    form: {
      component: FormLoading,
      defaultTitle: "Loading Form",
      defaultSubtitle: "Setting up your form"
    },
    payment: {
      component: PaymentLoading,
      defaultTitle: "Preparing Payment",
      defaultSubtitle: "Setting up secure payment processing"
    }
  }

  const { component: Component } = variants[variant]
  
  return (
    <Component 
      title={title || variants[variant].defaultTitle}
      subtitle={subtitle || variants[variant].defaultSubtitle}
      className={className}
    />
  )
}

// Section Loading Component
function SectionLoading({ title, subtitle, className }: { title: string; subtitle: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 px-6", className)}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-orange-300"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex space-x-1 mt-4"
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

// Card Loading Component
function CardLoading({ title, subtitle, className }: { title: string; subtitle: string; className?: string }) {
  return (
    <div className={cn("bg-white rounded-lg border border-gray-200 p-6", className)}>
      <div className="flex items-center space-x-4 mb-4">
        <motion.div
          className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Heart className="w-5 h-5 text-white" />
        </motion.div>
        <div className="flex-1">
          <motion.div
            className="h-4 bg-gray-200 rounded mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="h-3 bg-gray-200 rounded w-2/3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </div>
      </div>
      <motion.div
        className="h-20 bg-gray-200 rounded mb-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      />
      <div className="flex space-x-2">
        <motion.div
          className="h-8 bg-gray-200 rounded flex-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
        />
        <motion.div
          className="h-8 bg-gray-200 rounded w-16"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
        />
      </div>
    </div>
  )
}

// Form Loading Component
function FormLoading({ title, subtitle, className }: { title: string; subtitle: string; className?: string }) {
  return (
    <div className={cn("max-w-2xl mx-auto p-6", className)}>
      <div className="text-center mb-8">
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <BookOpen className="w-6 h-6 text-white" />
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </motion.div>
        ))}
        <motion.div
          className="h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
        />
      </div>
    </div>
  )
}

// Payment Loading Component
function PaymentLoading({ title, subtitle, className }: { title: string; subtitle: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 px-6", className)}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>
        </div>
        
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-300"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center space-x-6 mt-8"
      >
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-5 h-5 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-sm text-gray-600">Secure</span>
        </div>
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-5 h-5 bg-blue-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <span className="text-sm text-gray-600">Encrypted</span>
        </div>
      </motion.div>
    </div>
  )
}

// Page Loading Component (reused from page-loading.tsx)
function PageLoading({ title, subtitle, className }: { title: string; subtitle: string; className?: string }) {
  const icons = [BookOpen, GraduationCap, Heart, Users]
  
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-[400px] py-16 px-6", className)}>
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

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-4"
      >
        <p className="text-orange-600 font-devanagari text-lg">ज्ञानं परमं ध्येयम्</p>
        <p className="text-gray-500 text-sm mt-1">Knowledge is the ultimate goal</p>
      </motion.div>

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
