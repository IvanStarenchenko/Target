import { Goals } from '@/components/Goals/Goals'
import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Goal Page ',
}
export default function GoalPage() {
	return (
		<main className='p-5'>
			<Goals />
		</main>
	)
}
