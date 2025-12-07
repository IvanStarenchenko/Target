import { useLessonStore } from '@/store/lesson.store'
import { GoalItem } from '../GoalItem'
export function ActiveLessons() {
	const { lessons } = useLessonStore()
	const activeLessons = lessons?.filter(les => !les.isCompleted)
	return (
		<ul>
			{activeLessons?.map((les, index) => (
				<li key={index}>
					<GoalItem lesson={les} id={index} />
				</li>
			))}
		</ul>
	)
}
