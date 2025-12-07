'use client'
import { useMemo } from 'react'

interface IProps {
	plannedHours: number
	completedHours?: number
}
export function useMathSection({ plannedHours, completedHours }: IProps) {
	const progress = useMemo(() => {
		if (!completedHours) return 0

		return completedHours
	}, [completedHours])

	const percent = useMemo(
		() => Math.min(100, Math.round((progress / plannedHours) * 100)) || 0,
		[progress, plannedHours]
	)

	const remainingHours = Math.max(plannedHours - progress, 0)
	return {
		progress,
		percent,
		remainingHours,
	}
}
