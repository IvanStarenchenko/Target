import { useLessonStore } from '@/store/lesson.store'
import { GoalItem } from '../GoalItem'
export function FinishedLessons() {
	const { lessons } = useLessonStore()
	const finishedLessons = lessons?.filter(les => les.isCompleted)
	return (
		<ul className=''>
			{finishedLessons?.map((les, index) => (
				<li key={index}>
					<GoalItem lesson={les} id={index} />
				</li>
			))}
		</ul>
	)
}
