export function useFormateDate() {
	function formatLessonDate(date: Date | null | undefined): string {
		if (!date) return ''

		return new Intl.DateTimeFormat('ru-RU', {
			day: 'numeric',
			month: 'short',
		}).format(date)
	}
	return {
		formatLessonDate,
	}
}
