import { useFormateDate } from '@/hooks/useFormateDate'
import type { ILesson } from '@/shared/types/sections'
import { useLessonStore } from '@/store/lesson.store'

interface IProps {
	lesson: ILesson
	id: number
}
export function GoalItem({ lesson, id }: IProps) {
	const { formatLessonDate } = useFormateDate()

	const { updateLesson } = useLessonStore()

	function handleCompleteLesson() {
		const updated: ILesson = {
			...lesson,
			isCompleted: true,
		}
		//isCompleted: !lesson.isCompleted, TOGGLE
		updateLesson(id, updated)
	}
	return (
		<div className='bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3'>
			<div className='flex items-center justify-between'>
				<div className='flex items-start gap-3 w-full'>
					<p
						className='text-gray-800  ml-4 text-lg leading-tight line-clamp-1'
						style={{
							textDecoration: lesson.isCompleted ? 'line-through' : 'none',
							color: lesson.isCompleted ? 'gray' : 'inherit',
						}}
					>
						{lesson.title}
					</p>
				</div>

				<button className='bg-blue-200 rounded-[50%] w-7 h-7 mr-3'>
					{' '}
					<span
						className='text-green-500 text-xl font-black'
						onClick={handleCompleteLesson}
					>
						✓
					</span>{' '}
				</button>
				{!lesson.isCompleted && (
					<button className='text-gray-400 hover:text-red-500 transition-colors p-1'>
						🗑️
					</button>
				)}
			</div>

			<div className='flex items-center gap-5 ml-8 mt-2 text-sm'>
				<div className='flex items-center gap-1.5'>
					<div
						className='w-3 h-3 rounded-full'
						style={{ backgroundColor: lesson.sectionInfo?.color }}
					></div>

					<span className='text-gray-700 font-medium'>
						{lesson.sectionInfo?.name || 'Без раздела'}
					</span>
				</div>

				<div className='flex items-center gap-1.5 text-gray-500'>
					📅
					<span>{formatLessonDate(lesson.date)}</span>
				</div>

				<span
					className={`
						px-2 py-0.5 rounded-md text-xs font-semibold
						${getPriorityStyles(lesson.priority)}
					`}
				>
					{lesson.priority}
				</span>
			</div>
		</div>
	)
}

function getPriorityStyles(priority: string) {
	switch (priority) {
		case 'High':
			return 'bg-red-100 text-red-600'
		case 'Medium':
			return 'bg-yellow-100 text-yellow-700'
		case 'Low':
			return 'bg-green-100 text-green-700'
		default:
			return 'bg-gray-100 text-gray-600'
	}
}
