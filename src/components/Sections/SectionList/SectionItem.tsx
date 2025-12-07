'use client'
import { useMathSection } from '@/hooks/useMathSection'
import type { ISection } from '@/shared/types/sections'
import { useLessonStore } from '@/store/lesson.store'
import { lazy, Suspense } from 'react'
const TrashIcon = lazy(() =>
	import('react-icons/fa').then(m => ({ default: m.FaRegTrashAlt }))
)

interface IProps {
	section: ISection
	openModal?: (text: string) => void
	handleSaveInfo?: (sectionInfo: ISection) => void
}

export function SectionItem({ section, handleSaveInfo, openModal }: IProps) {
	const { lesson } = useLessonStore()
	const { progress, percent, remainingHours } = useMathSection({
		plannedHours: section.plannedHours,
		completedHours: lesson
			? lesson
					.filter(l => l.sectionInfo?.id === section.id && l.isCompleted)
					.reduce((acc, curr) => acc + curr.spentHours, 0)
			: 0,
	})

	return (
		<div
			className='p-5 bg-white rounded-xl border shadow-lg '
			style={{ borderColor: 'var(--borderHover)' }}
		>
			<div className='flex justify-between'>
				<div className='flex items-center gap-x-4'>
					<div
						className='w-10 h-10 rounded-xl flex items-center justify-center'
						style={{
							border: `2px solid ${section.color}`,
						}}
					>
						<div
							className='w-5 h-5 rounded-full'
							style={{ backgroundColor: `${section.color}` }}
						/>
					</div>

					<div className='flex flex-col gap-y-1 text-[14px]'>
						<p
							className='font-medium text-[18px]'
							style={{
								textDecoration: percent === 100 ? 'line-through' : 'none',
								color: percent === 100 ? 'grey' : 'inherit',
							}}
						>
							{section.name || 'Без названия'}
						</p>
						<p className='text-gray-500'>{percent}% завершено</p>
					</div>
				</div>

				<Suspense>
					<button>
						<TrashIcon size={18} color='red' />
					</button>
				</Suspense>
			</div>

			<div className='mt-4 w-full h-2 rounded-full bg-gray-200'>
				<div
					className='h-full rounded-full'
					style={{
						width: `${percent}%`,
						backgroundColor: `${section.color}`,
					}}
				/>
			</div>

			<div className='mt-4 flex justify-between text-[13px] text-gray-600'>
				<p>
					{progress} / {section.plannedHours}ч
				</p>
				<p>{remainingHours}ч осталось</p>
			</div>

			<button
				className='mt-4 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition'
				onClick={() => {
					openModal?.('CREATE_LESSON')
					handleSaveInfo?.(section)
				}}
			>
				<p className='text-[#424040]'>Добавить занятие</p>
			</button>
		</div>
	)
}
