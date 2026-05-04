import { useTopStories } from '@/features/hn/api/getList'

export default function App() {
  const { data, isLoading, error } = useTopStories()

  console.log(data)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <div>{JSON.stringify(data)}</div>
}
