import { SectionColorKey } from '@/Const/SectionColors'

export interface ISection {
	id?: string
	name: string
	color: SectionColorKey
	plannedHours: number
	//readonly createdAt: Date
	//isCompleted: boolean
	completedHours?: number
	lessons?: ILesson[]
}
export type TPriority = 'Low' | 'Medium' | 'High'

export interface ILesson {
	//readonly sectionId: number
	priority: TPriority
	isCompleted: boolean
	title: string
	sectionInfo?: ISection | null
	date: Date | null
	spentHours: number
	//readonly createdAt?: Date
}
