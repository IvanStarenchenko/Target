import { Sections } from '@/components/Sections/Sections'
import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Section Page ',
}
export default function SectionPage() {
	return (
		<main className='p-5'>
			<Sections />
		</main>
	)
}
