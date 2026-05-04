import { useStories } from '@/features/hn/api/getStories'
import { useItem } from '@/features/hn/api/getItem'

export default function App() {
  const { data: topStories, isLoading, error } = useStories()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error?.message}</div>

  const itemIds = topStories?.slice(0, 30) || []

  return (
    <tbody>
      {itemIds.map(id => (
        <ItemRow key={id} itemId={id} />
      ))}
    </tbody>
  )
}

function ItemRow({ itemId }) {
  const { data: item, isLoading, error } = useItem(itemId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error?.message}</div>

  return <tr>{JSON.stringify(item)}</tr>
}
