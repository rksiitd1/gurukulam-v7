"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Video, Clock, Eye, X } from "lucide-react"
import Image from "next/image"

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const videos = [
    {
      id: 1,
      title: "Divya Bihar Mission - Our Story",
      description: "Complete journey of Divya Bihar Mission from inception to current impact",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "12:45",
      views: "2.5K",
      category: "Documentary",
      embedId: "dQw4w9WgXcQ", // YouTube video ID
      date: "March 2024",
    },
    {
      id: 2,
      title: "रश्मिरथी तृत्य सर्ग।। रामधारी सिंह दिनकर।। महाभारत शांति पर्व।।",
      description: "This video is about 'रश्मिरथी तृत्य सर्ग' by Ramdhari Singh Dinkar, related to 'Mahabharat Shanti Parv'",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "2:33",
      views: "276",
      category: "Poem",
      embedId: "kTfejRDIAK8",
      date: "August 2023",
    },
    {
      id: 3,
      title: "सुबह सवेरे लेकर तेरा नाम प्रभु - प्रार्थना",
      description: "Begin your day on a positive and spiritual note with this heartfelt rendition of the popular prayer",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "1:57",
      views: "172",
      category: "Prayer",
      embedId: "FGg9PJqRE5E",
      date: "November 2021",
    },
    {
      id: 4,
      title: "ये मत कहो खुदा से मेरी मुश्किलें - हिंदी कविता",
      description: 'This stirring Hindi poem, "Ye Mat Kaho Khuda Se," is an uplifting message of resilience and faith',
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "3:48",
      views: "172",
      category: "Poem",
      embedId: "zIMGflVknEk",
      date: "October 2021",
    },
    {
      id: 5,
      title: "एकता की शक्ति: चिड़िया और हाथी की प्रेरणादायक कहानी",
      description: "A heartwarming tale of unity where tiny creatures outsmart a mighty elephant through teamwork",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "5:57",
      views: "410",
      category: "Story",
      embedId: "__LN-s-wziA",
      date: "September 2021",
    },
    {
      id: 6,
      title: "दूर असत से करो मुझे सत्पथ दिखलाओ - हिंदी कविता",
      description: "A spiritually uplifting poem invoking divine guidance from darkness to truth, celebrating nature’s strength",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "1:58",
      views: "445",
      category: "Poem",
      embedId: "XGHk_POOx2o",
      date: "September 2021",
    },
    {
      id: 7,
      title: "असली विद्वान कौन? चार मित्रों की कहानी",
      description: "Four friends gain magical skills, but only wisdom saves one when knowledge meets poor judgment",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "4:40",
      views: "146",
      category: "Story",
      embedId: "5L0RZM2ZdeE",
      date: "September 2021",
    },
    {
      id: 8,
      title: "Kamla River Aarti | कमला नदी आरती",
      description: "A beautiful aarti performed on the banks of the Kamla River, celebrating the beauty of nature & the divine presence",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "10:02",
      views: "193",
      category: "Culture",
      embedId: "DR6GQgcGKxw",
      date: "August 2021",
    },
    {
      id: 9,
      title: "है शौक यही अरमान यही हम कुछ करके दिखलाएंगे - हिंदी कविता",
      description: "This poem is about the power of dreams and how we can achieve them by working hard",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "3:45",
      views: "816",
      category: "Poem",
      embedId: "LgLfqx8MQaU",
      date: "August 2021",
    },
  ]

  const openVideo = (index: number) => {
    setSelectedVideo(index)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
            <Video className="w-4 h-4 mr-2" />
            Video Gallery
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stories in
            <span className="text-red-600 block">Motion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness dreams becoming reality through our video stories of holistic transformation in rural Bihar.
          </p>
          <p className="text-lg font-devanagari text-red-700 mt-2">चलचित्रों में हमारी कहानी</p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={videos[0].thumbnail || "/placeholder.svg"}
                  alt={videos[0].title}
                  width={1200}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => openVideo(0)}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-2xl"
                  >
                    <Play className="w-12 h-12 ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                  {videos[0].duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{videos[0].title}</h3>
                <p className="text-gray-600 mb-4">{videos[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{videos[0].date}</span>
                    </div>
                  </div>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {videos[0].category}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.slice(1).map((video, index) => (
            <Card
              key={video.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openVideo(index + 1)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-red-600 text-white rounded-full p-3">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{video.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[selectedVideo].embedId}?autoplay=1`}
                    title={videos[selectedVideo].title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{videos[selectedVideo].title}</h3>
                  <p className="text-gray-600 mb-4">{videos[selectedVideo].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{videos[selectedVideo].date}</span>
                      </div>
                    </div>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {videos[selectedVideo].category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Channel CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Video className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our YouTube Channel</h3>
            <p className="text-lg opacity-90 mb-6">
              Stay updated with our latest videos, success stories, and educational content. Join our growing community
              of supporters and students.
            </p>
            <p className="font-devanagari text-lg opacity-90 mb-6">हमारे यूट्यूब चैनल को सब्सक्राइब करें</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100"
                asChild
              >
                <a
                  href="https://www.youtube.com/@shriclasses2?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Subscribe Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white hover:bg-white/10 text-slate-500"
                asChild
              >
                <a
                  href="https://www.youtube.com/@shriclasses2/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch All Videos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
