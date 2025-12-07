import { ILesson } from '@/shared/types/sections'
import { useLessonStore } from '@/store/lesson.store'
import { useSectionStore } from '@/store/section.store'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
const Modal = dynamic(() => import('@/Ui/Modal/Modal').then(mod => mod.Modal), {
	ssr: false,
})
interface IProps {
	onClose: () => void
}
const schema = z.object({
	title: z.string().min(1, 'Название занятия обязательно'),
	priority: z.enum(['Low', 'Medium', 'High']).optional(),
	isCompleted: z.boolean().optional(),
	date: z.date().nullable(),
	spentHours: z.number().min(0.1, 'Количество часов должно быть больше 0'),
})

export type TLesson = z.infer<typeof schema>

export function CreateLesson({ onClose }: IProps) {
	const { setLesson } = useLessonStore()
	const { sectionInfo } = useSectionStore()

	function onSubmit(data: TLesson) {
		const lesson: ILesson = {
			...data,
			priority: data.priority ?? 'Low',
			isCompleted: data.isCompleted ?? false,
			sectionInfo,
		}
		setLesson(lesson)

		onClose()
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TLesson>({
		resolver: zodResolver(schema),
		defaultValues: {
			date: null,
			priority: 'Low',
			isCompleted: false,
			title: '',
			spentHours: 1,
		},
	})
	return (
		<Modal onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p className='text-left text-(--color) font-bold'>
					Добавить занятие для {sectionInfo?.name}
				</p>

				<label className='flex flex-col gap-y-2 mb-3 mt-4 font-medium text-left'>
					<span>Дата занятия</span>
					<input
						type='date'
						{...register('date', { valueAsDate: true })}
						className='p-2 border border-(--border-color) rounded-md bg-(--input-bg) focus:outline-none focus:ring-2 focus:ring-(--focus-ring)'
					/>
					{errors.date && (
						<p className='text-red-500 text-sm mt-1'>{errors.date.message}</p>
					)}
				</label>
				<label className='flex flex-col gap-y-2 mb-3 mt-4 font-medium text-left'>
					<span>Что собираетесь изучить?</span>
					<input
						type='text'
						{...register('title')}
						placeholder='Например: Изучить основы JavaScript'
						className='p-2 border border-(--border-color) rounded-md bg-(--input-bg) focus:outline-none focus:ring-2 focus:ring-(--focus-ring)'
					/>
					{errors.title && (
						<p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>
					)}
				</label>

				<label className='flex flex-col gap-y-2 mb-3 font-medium text-left'>
					<span>Потраченные часы</span>
					<input
						type='number'
						step='0.1'
						{...register('spentHours', { valueAsNumber: true })}
						className='p-2 border border-(--border-color) rounded-md bg-(--input-bg) focus:outline-none focus:ring-2 focus:ring-(--focus-ring)'
					/>
					{errors.spentHours && (
						<p className='text-red-500 text-sm mt-1'>
							{errors.spentHours.message}
						</p>
					)}
				</label>
				<label className='flex flex-col gap-y-2 mb-3 font-medium text-left'>
					<span>Выберите приоритет задачи</span>
					<select
						{...register('priority')}
						className='p-2 border border-(--border-color) tracking-[2px] rounded-md bg-(--input-bg) w-full
               focus:outline-none focus:ring-2 focus:ring-(--focus-ring) appearance-none cursor-pointer '
					>
						<option value='Low'>Низкий</option>
						<option value='Medium'>Средний</option>
						<option value='High'>Высокий</option>
					</select>
				</label>

				<button
					type='submit'
					className='mt-4 w-full bg-blue-500 text-white p-3 rounded-xl font-medium hover:bg-blue-600 transition'
				>
					Создать занятие
				</button>
			</form>
		</Modal>
	)
}
