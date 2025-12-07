import type { Lesson, Section } from '@/shared/types/sections'
import Dexie from 'dexie'

class TrainingDB extends Dexie {
	sections!: Dexie.Table<Section, number>
	lessons!: Dexie.Table<Lesson, number>

	constructor() {
		super('TrainingDB')

		this.version(1).stores({
			sections: '++id, name, color, plannedHours, createdAt',
			lessons: '++sectionId, date, spentHours, createdAt',
		})
	}
}

export const db = new TrainingDB()
