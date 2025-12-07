'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { IHeader } from '../../shared/types/header'

export function HeaderItem({ title, icon, link }: IHeader) {
	const pathname = usePathname()
	return (
		<Link
			href={link}
			className={`flex text-[16px] items-center gap-2 px-3 py-3.5 ${
				pathname === link && 'active'
			}`}
		>
			<div>{icon}</div>
			<div>{title}</div>
		</Link>
	)
}
