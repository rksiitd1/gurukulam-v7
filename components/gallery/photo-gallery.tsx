"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Filter, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(12)

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "classroom", name: "Classroom" },
    { id: "cultural", name: "Cultural Events" },
    { id: "agriculture", name: "Agriculture" },
    { id: "sports", name: "Sports & Games" },
    { id: "community", name: "Community" },
  ]

  const photos = [
    {
      id: 1,
      src: "/images/gallery/1.jpg",
      title: "Classroom Learning",
      description: "Students engaged in learning activities sitting on the floor",
      category: "classroom",
      date: "2024-01-15",
    },
    {
      id: 2,
      src: "/images/gallery/2.jpg",
      title: "Teacher Instruction",
      description: "Teacher actively instructing students in a classroom setting",
      category: "classroom",
      date: "2024-01-20",
    },
    {
      id: 3,
      src: "/images/gallery/3.jpg",
      title: "Cultural Dance Performance",
      description: "Girls performing a traditional dance at a cultural event",
      category: "cultural",
      date: "2024-02-10",
    },
    {
      id: 4,
      src: "/images/gallery/4.jpg",
      title: "Outdoor Play",
      description: "Children running and playing outdoors",
      category: "sports",
      date: "2024-02-15",
    },
    {
      id: 5,
      src: "/images/gallery/5.jpg",
      title: "Community Gathering",
      description: "Villagers sitting in a circle for a community meeting",
      category: "community",
      date: "2024-03-05",
    },
    {
      id: 6,
      src: "/images/gallery/6.jpg",
      title: "Focused Study",
      description: "Students sitting at desks, focused on their studies",
      category: "classroom",
      date: "2024-03-10",
    },
    {
      id: 7,
      src: "/images/gallery/7.jpg",
      title: "Interactive Learning",
      description: "Students raising their hands to answer questions in class",
      category: "classroom",
      date: "2024-03-20",
    },
    {
      id: 8,
      src: "/images/gallery/8.jpg",
      title: "Cultural Celebration",
      description: "Group photo of students on stage during a cultural celebration",
      category: "cultural",
      date: "2024-04-14",
    },
    {
      id: 9,
      src: "/images/gallery/9.jpg",
      title: "Farmers in Field",
      description: "Farmers inspecting crops in an agricultural field",
      category: "agriculture",
      date: "2024-04-20",
    },
    {
      id: 10,
      src: "/images/gallery/10.jpg",
      title: "Volleyball Match",
      description: "Kids playing a game of volleyball",
      category: "sports",
      date: "2024-05-01",
    },
    {
      id: 11,
      src: "/images/gallery/11.jpg",
      title: "Women's Group Meeting",
      description: "Women gathering for a community support group meeting",
      category: "community",
      date: "2024-05-10",
    },
    {
      id: 12,
      src: "/images/gallery/12.jpg",
      title: "Diligent Students",
      description: "Students studying hard in the classroom",
      category: "classroom",
      date: "2024-06-05",
    },
    {
      id: 13,
      src: "/images/gallery/13.jpg",
      title: "Costume Performance",
      description: "Children dressed in costumes for a cultural performance",
      category: "cultural",
      date: "2024-06-15",
    },
    {
      id: 14,
      src: "/images/gallery/14.jpg",
      title: "Agricultural Field Visit",
      description: "Group visit to an agricultural field for inspection",
      category: "agriculture",
      date: "2024-07-01",
    },
    {
      id: 15,
      src: "/images/gallery/15.jpg",
      title: "Cricket Match",
      description: "Students playing a game of cricket",
      category: "sports",
      date: "2024-07-10",
    },
    {
      id: 16,
      src: "/images/gallery/16.jpg",
      title: "Medical Camp",
      description: "Community members attending a medical checkup camp",
      category: "community",
      date: "2024-08-05",
    },
    {
      id: 17,
      src: "/images/gallery/17.jpg",
      title: "Digital Literacy",
      description: "Students learning computer skills in the lab",
      category: "classroom",
      date: "2024-08-15",
    },
    {
      id: 18,
      src: "/images/gallery/18.jpg",
      title: "Art Competition",
      description: "Students participating in an art and painting competition",
      category: "cultural",
      date: "2024-09-05",
    },
    {
      id: 19,
      src: "/images/gallery/19.jpg",
      title: "Organic Farming Workshop",
      description: "Farmers attending a workshop on organic farming techniques",
      category: "agriculture",
      date: "2024-09-20",
    },
    {
      id: 20,
      src: "/images/gallery/20.jpg",
      title: "Yoga Session",
      description: "Students practicing yoga outdoors",
      category: "sports",
      date: "2024-10-02",
    },
    {
      id: 21,
      src: "/images/gallery/21.jpg",
      title: "Food Distribution",
      description: "Community food distribution service",
      category: "community",
      date: "2024-10-15",
    },
    {
      id: 22,
      src: "/images/gallery/22.jpg",
      title: "Science Experiment",
      description: "Students conducting a science experiment in class",
      category: "classroom",
      date: "2024-11-14",
    },
    {
      id: 23,
      src: "/images/gallery/23.jpg",
      title: "Music Performance",
      description: "Students performing music on stage",
      category: "cultural",
      date: "2024-11-20",
    },
    {
      id: 24,
      src: "/images/gallery/24.jpg",
      title: "Tree Plantation",
      description: "Community drive for tree plantation",
      category: "agriculture",
      date: "2024-12-05",
    },
    {
      id: 25,
      src: "/images/gallery/25.jpg",
      title: "Kabaddi Match",
      description: "Students playing a traditional game of Kabaddi",
      category: "sports",
      date: "2024-12-15",
    },
  ]

  const sortedPhotos = [...photos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const filteredPhotos =
    selectedCategory === "all"
      ? sortedPhotos
      : sortedPhotos.filter((photo) => photo.category === selectedCategory)

  const visiblePhotos = filteredPhotos.slice(0, visibleCount)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredPhotos.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredPhotos.length - 1 : selectedImage - 1)
    }
  }

  // Calculate counts dynamically
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") {
      return photos.length
    }
    return photos.filter(photo => photo.category === categoryId).length
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Capturing
            <span className="text-blue-600 block">Every Moment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of photographs
            documenting the journey of transformation
            at Divya Bihar Mission.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">हर पल को संजोते हुए</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category.id)
                setVisibleCount(12)
              }}
              size="sm"
              className={`${selectedCategory === category.id
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-blue-200 text-blue-700 hover:bg-blue-50"
                } text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap`}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-2" />
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              <span className="hidden sm:inline"> ({getCategoryCount(category.id)})</span>
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visiblePhotos.map((photo, index) => (
            <Card
              key={photo.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={`${photo.title} - ${photo.category} category`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-sm mb-1">{photo.title}</h3>
                    <p className="text-xs opacity-90">{photo.date}</p>
                  </div> */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-700 hover:bg-blue-50"
              onClick={() => setVisibleCount(visibleCount + 12)}
            >
              Load More Photos
            </Button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <Image
                  src={filteredPhotos[selectedImage].src || "/placeholder.svg"}
                  alt={`${filteredPhotos[selectedImage].title} - Full View`}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                {/* <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{filteredPhotos[selectedImage].title}</h3>
                  <p className="text-gray-600 mb-2">{filteredPhotos[selectedImage].description}</p>
                  <p className="text-sm text-gray-500">{filteredPhotos[selectedImage].date}</p>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
