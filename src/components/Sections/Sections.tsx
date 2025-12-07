'use client'
import { useModal } from '@/hooks/useModal'
import { CreateLesson } from '../Goals/GoalModal/CreateLesson'
import { SectionList } from './SectionList/SectionList'
import { CreateSection } from './SectionModal/CreateSection'
export function Sections() {
	const { modalType, openModal, handleModalClose } = useModal()
	return (
		<div>
			<div className='flex flex-col'>
				<div className='flex items-center justify-between'>
					<h1>Разделы обучения</h1>
					<button
						className='flex items-center gap-x-3 rounded-lg bg-(--hover) py-1 px-2.5 hover:bg-[#0606c9]'
						onClick={() => {
							openModal('CREATE_SECTION')
						}}
					>
						{' '}
						<span className='text-2xl'>+</span> Добавить раздел
					</button>
				</div>
				<SectionList openModal={openModal} />
			</div>
			{modalType === 'CREATE_SECTION' && (
				<CreateSection onClose={handleModalClose} />
			)}
			{modalType === 'CREATE_LESSON' && (
				<CreateLesson onClose={handleModalClose} />
			)}
		</div>
	)
}
