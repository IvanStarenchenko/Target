import { useLessonStore } from '@/store/lesson.store'
import { GoalItem } from '../GoalItem'
export function AllLessons() {
	const { lessons } = useLessonStore()
	return (
		<ul>
			{lessons?.map((les, index) => (
				<li key={index}>
					<GoalItem lesson={les} id={index} />
				</li>
			))}
		</ul>
	)
}
