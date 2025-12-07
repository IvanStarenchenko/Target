'use client'
import type { ISection } from '@/shared/types/sections'
import { useSectionStore } from '@/store/section.store'
import { SectionItem } from './SectionItem'

interface IProps {
	openModal?: (type: string) => void
}

export function SectionList({ openModal }: IProps) {
	const { sections, setSectionInfo } = useSectionStore()
	//const { lesson } = useLessonStore()

	function handleSaveInfo(sectionInfo: ISection) {
		setSectionInfo?.(sectionInfo)
	}
	return (
		<div className='grid grid-cols-3 gap-8 mt-7'>
			{sections && sections.length > 0 ? (
				sections.map((section, index) => (
					<SectionItem
						handleSaveInfo={handleSaveInfo}
						openModal={openModal}
						key={index}
						section={section}
					/>
				))
			) : (
				<p>Нет доступных разделов.</p>
			)}
		</div>
	)
}
