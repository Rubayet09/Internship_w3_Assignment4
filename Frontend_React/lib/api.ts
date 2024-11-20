// import { HotelDetails } from '@/types/hotel'

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// export async function getHotelById(id: string): Promise<HotelDetails | null> {
//   try {
//     const response = await fetch(`${API_URL}/hotel/${id}`, {
//       next: { revalidate: 3600 } // Cache for 1 hour
//     })

//     if (!response.ok) {
//       if (response.status === 404) {
//         return null
//       }
//       throw new Error('Failed to fetch hotel data')
//     }

//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.error('Error fetching hotel:', error)
//     throw error
//   }
// }

// export async function getHotelsByIds(ids: string[]): Promise<HotelDetails[]> {
//   try {
//     const hotels = await Promise.all(
//       ids.map(id => getHotelById(id).catch(() => null))
//     )
//     return hotels.filter((hotel): hotel is HotelDetails => hotel !== null)
//   } catch (error) {
//     console.error('Error fetching hotels:', error)
//     throw error
//   }
// }


// lib/api.ts
import { Hotel, HotelResponse, HotelErrorResponse } from '@/types/hotel'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export async function getHotelById(id: string): Promise<Hotel | null> {
  try {
    const response = await fetch(`${API_URL}/hotels/${id}`, {
      next: { 
        revalidate: 3600
      },
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })

    if (!response.ok) {
      if (response.status === 404) return null
      throw new Error('Failed to fetch hotel data')
    }

    const data: HotelResponse = await response.json()
    return data.success ? data.data : null
  } catch (error) {
    console.error('Fetch hotel error:', error)
    return null
  }
}