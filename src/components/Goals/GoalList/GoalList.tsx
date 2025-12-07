'use client'
import { useLessonStore } from '@/store/lesson.store'
import { GoalItem } from './GoalItem'
export function GoalList() {
	const { lesson } = useLessonStore()

	return (
		<div>
			<ul>
				{lesson?.map((les, index) => (
					<li key={index}>
						<GoalItem lesson={les} id={index} />
					</li>
				))}
			</ul>
		</div>
	)
}
