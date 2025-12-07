export const SectionColors = {
	Blue: '#3B82F6',
	Green: '#10B981',
	Yellow: '#F59E0B',
	Red: '#EF4444',
	Purple: '#8B5CF6',
	Pink: '#EC4899',
	Teal: '#14B8A6',
	Orange: '#F97316',
	Indigo: '#6366F1',
	Cyan: '#06B6D4',
	Lime: '#84CC16',
} as const

export type SectionColorKey = keyof typeof SectionColors
