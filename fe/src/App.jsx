import { useTopStories } from '@/features/hn/api/getList'
import { useItem } from '@/features/hn/api/getItem'

export default function App() {
  const { data: topStories, isLoading, error } = useTopStories()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error?.message}</div>

  const itemIds = topStories?.slice(0, 30) || []

  return (
    <div>
      {itemIds.map(id => (
        <ItemRow key={id} itemId={id} />
      ))}
    </div>
  )
}

function ItemRow({ itemId }) {
  const { data: item, isLoading, error } = useItem(itemId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error?.message}</div>

  return <div>{JSON.stringify(item)}</div>
}
