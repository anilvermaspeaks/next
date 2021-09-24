import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import Event from '@/components/Event'

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show!</h3>}

      {events.length > 0 && events.map(evt => <Event key={evt.id} evt={evt} />)}

      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View All Events</a>
        </Link>
      )}
    </Layout>
  )
}


export async function getStaticProps() {

  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {
      events: events.events.slice(0, 3)
    },
    revalidate: 1
  }
}