'use client'
import { useLessonStore } from '@/store/lesson.store'
import { useState } from 'react'
import { ActiveLessons } from './GoalSections/ActiveLessons'
import { AllLessons } from './GoalSections/AllLessons'
import { FinishedLessons } from './GoalSections/FinishedLessons'
import { TopButtons } from './GoalSections/TopButtons'
export function GoalList() {
	const { lessons } = useLessonStore()
	const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>(
		'all'
	)
	function setActive(tab: 'all' | 'active' | 'completed') {
		setActiveTab(tab)
	}
	return (
		<div className='flex-col '>
			<TopButtons setActive={setActive} />
			<div className='mt-8'>
				{activeTab === 'all' && lessons ? (
					<AllLessons />
				) : activeTab === 'active' ? (
					<ActiveLessons />
				) : activeTab === 'completed' ? (
					<FinishedLessons />
				) : (
					<p className='mt-8'>No Lessons</p>
				)}
			</div>
		</div>
	)
}
