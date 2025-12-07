import { SectionColors, type SectionColorKey } from '@/Const/SectionColors'
import { twMerge } from 'tailwind-merge'

interface ColorsProps {
	value?: SectionColorKey | null
	onSelect: (color: SectionColorKey) => void
}

export function Colors({
	value = Object.keys(SectionColors)[0] as SectionColorKey,
	onSelect,
}: ColorsProps) {
	return (
		<div>
			<ul
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(5, 1fr)',
					gap: '10px',
				}}
			>
				{Object.entries(SectionColors).map(([key, color]) => {
					const colorKey = key as SectionColorKey
					const isActive = value === colorKey

					return (
						<li
							key={colorKey}
							onClick={() => onSelect(colorKey)}
							className={twMerge(
								'rounded-[5px] p-2.5 w-[50px] h-[50px] cursor-pointer border-2 transition',
								isActive ? 'border-black scale-110' : 'border-transparent'
							)}
							style={{
								backgroundColor: color,
							}}
						/>
					)
				})}
			</ul>
		</div>
	)
}
