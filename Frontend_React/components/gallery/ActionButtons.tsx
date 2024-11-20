import { Share2, Heart } from 'lucide-react'

interface ActionButtonsProps {
  onShare: () => void
  onSave: () => void
  isSaved?: boolean
}

export default function ActionButtons({ onShare, onSave, isSaved = false }: ActionButtonsProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onShare}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
      >
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>
      <button
        onClick={onSave}
        className={`flex items-center gap-2 px-4 py-2 rounded-full ${
          isSaved ? 'bg-red-500 text-white' : 'bg-white'
        } shadow-md hover:opacity-90 transition-colors`}
      >
        <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        <span>{isSaved ? 'Saved' : 'Save'}</span>
      </button>
    </div>
  )
}