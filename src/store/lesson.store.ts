import type { ILesson } from '@/shared/types/sections'
import { create } from 'zustand'
// need array instead of object to store multiple lessons
interface IProps {
	lesson: ILesson[] | null
	setLesson: (lesson: ILesson) => void
	updateLesson: (id: number, updated: ILesson) => void
}

export const useLessonStore = create<IProps>(set => ({
	lesson: null,
	setLesson: (lesson: ILesson) =>
		set(prev => ({
			lesson: prev.lesson ? [...prev.lesson, lesson] : [lesson],
		})),
	updateLesson: (id, updated) =>
		set(state => {
			if (!state.lesson) return state

			const copy = [...state.lesson]
			copy[id] = updated

			return { lesson: copy }
		}),
}))
