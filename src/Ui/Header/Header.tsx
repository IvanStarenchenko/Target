import { headerData } from '@/shared/data/header'
import { HeaderItem } from './HeaderItem'
export function Header() {
	return (
		<div className='bg-white border-y border-[#E5E7EB]'>
			<ul className='flex items-center gap-x-2 ml-44'>
				{headerData.map(item => (
					<li key={item.title} className='headerItem '>
						<HeaderItem link={item.link} title={item.title} icon={item.icon} />
					</li>
				))}
			</ul>
		</div>
	)
}
