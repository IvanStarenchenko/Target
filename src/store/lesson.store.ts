import type { ILesson } from '@/shared/types/sections'
import { create } from 'zustand'
// need array instead of object to store multiple lessons
interface IProps {
	lessons: ILesson[] | null
	setLesson: (lesson: ILesson) => void
	updateLesson: (id: number, updated: ILesson) => void
}

export const useLessonStore = create<IProps>(set => ({
	lessons: null,
	setLesson: (lesson: ILesson) =>
		set(prev => ({
			lessons: prev.lessons ? [...prev.lessons, lesson] : [lesson],
		})),
	updateLesson: (id, updated) =>
		set(state => {
			if (!state.lessons) return state

			const copy = [...state.lessons]
			copy[id] = updated

			return { lessons: copy }
		}),
}))
