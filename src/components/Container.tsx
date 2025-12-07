export function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='pt-10'>{children}</div>
		</div>
	)
}
