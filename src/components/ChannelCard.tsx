import { Plus } from 'lucide-react'

interface ChannelCardProps {
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  isAddCard?: boolean
}

const ChannelCard = ({
  title,
  description,
  actionLabel,
  onAction,
  isAddCard = false,
}: ChannelCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 ${
        isAddCard ? 'cursor-pointer hover:border-brand-yellow' : ''
      }`}
      onClick={isAddCard ? onAction : undefined}
    >
      {isAddCard ? (
        <div className="flex flex-col items-center justify-center h-full min-h-[120px]">
          <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-3">
            <Plus className="w-6 h-6 text-brand-yellow" />
          </div>
          <div className="text-sm font-medium text-gray-700">{title}</div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-brand-black">{title}</h3>
          </div>
          {description && (
            <p className="text-sm text-gray-600 mb-4">{description}</p>
          )}
          {actionLabel && (
            <button
              onClick={onAction}
              className="text-sm text-brand-yellow hover:text-brand-yellow/80 font-medium"
            >
              {actionLabel}
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default ChannelCard

