export function TopButtons({
	setActive,
}: {
	setActive: (tab: 'all' | 'active' | 'completed') => void
}) {
	return (
		<div className='grid grid-cols-3 gap-x-2 items-center'>
			<div className='cursor-pointer grid grid-cols-[repeat(3,125px)] gap-x-2 items-center text-center'>
				<div
					className='button'
					onClick={() => {
						setActive('all')
					}}
				>
					Все
				</div>
				<div
					className='button'
					onClick={() => {
						setActive('active')
					}}
				>
					Активные
				</div>
				<div
					className='button'
					onClick={() => {
						setActive('completed')
					}}
				>
					Завершенные
				</div>
			</div>
		</div>
	)
}
