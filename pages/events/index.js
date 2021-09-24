import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import Event from '@/components/Event'

export default function HomePage({ events }) {
    return (
        <Layout title="Events page">
            <h1>Events</h1>
            {events.length === 0 && <h3>No Events to show!</h3>}

            {events.length > 0 && events.map(evt => <Event key={evt.id} evt={evt} />)}
        </Layout>
    )
}


export async function getStaticProps() {

    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    return {
        props: {
            events: events.events
        },
        revalidate: 1
    }
}