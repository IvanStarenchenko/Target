import type { ISection } from '@/shared/types/sections'
import { create } from 'zustand'
interface IProps {
	sections: ISection[] | null
	setSection: (sections: ISection) => void
	sectionInfo?: ISection | null
	setSectionInfo?: (sectionInfo: ISection) => void
}

export const useSectionStore = create<IProps>(set => ({
	sections: null,
	setSection: (sections: ISection) =>
		set(prev => ({
			sections: prev.sections ? [...prev.sections, sections] : [sections],
		})),
	sectionInfo: null,
	setSectionInfo: (sectionInfo: ISection) => set({ sectionInfo }),
}))
