import Seo from '../../components/Seo'
import { useRouter } from 'next/router'

export default function Detail({ params }: { params: string[] }) {
  const router = useRouter()
  const [title, id] = params || []
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  )
}

export function getServerSideProps({
  params: { params },
}: {
  params: { params: string[] }
}) {
  return { props: { params } }
}
