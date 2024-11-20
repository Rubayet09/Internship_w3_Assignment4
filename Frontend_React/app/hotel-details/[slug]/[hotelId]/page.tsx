import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getHotelById } from '@/lib/api'
import Gallery from '@/components/gallery/Gallery'
import PropertyInfo from '@/components/property/PropertyInfo'
import Location from '@/components/location/Location'
import BookingCard from '@/components/booking/BookingCard'
import ReviewSection from '@/components/reviews/ReviewSection'
import TopNav from '@/components/navigation/TopNav'
import { Hotel } from '@/types/hotel'
import { Suspense } from 'react'

interface PageProps {
  params: {
    slug: string
    hotelId: string
  }
}

function LoadingState() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const hotel = await getHotelById(params.hotelId)
    
    if (!hotel) {
      return {
        title: 'Hotel Not Found',
      }
    }

    return {
      title: `${hotel.title} - Hotel Details`,
      description: hotel.description,
      openGraph: {
        title: hotel.title,
        description: hotel.description,
        images: hotel.images?.length > 0 ? [{ url: hotel.images[0].url }] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Hotel Details',
    }
  }
}

export default async function Page({ params }: PageProps) {
  try {
    const hotel = await getHotelById(params.hotelId)

    if (!hotel) {
      return notFound()
    }

    return (
      <div>
        <TopNav />
        <Suspense fallback={<LoadingState />}>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Gallery hotel={hotel} />
                <PropertyInfo hotel={hotel} />
                <Location hotel={hotel} />
                <ReviewSection reviews={hotel.reviews ?? []} />
              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-4">
                  <BookingCard hotel={hotel} />
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    )
  } catch (error) {
    console.error('Error loading hotel:', error)
    return notFound()
  }
}