import { GoGoal } from 'react-icons/go'
import { ImStatsBars } from 'react-icons/im'
import { IoBookOutline } from 'react-icons/io5'

import { MdOutlineSpaceDashboard } from 'react-icons/md'
import type { IHeader } from '../types/header'

const DASH = <MdOutlineSpaceDashboard />
const BOOK = <IoBookOutline />
const GOAL = <GoGoal />
const STATS = <ImStatsBars />

export const headerData: IHeader[] = [
	{
		icon: DASH,
		title: 'Dashboard',
		link: '/dashboard',
	},
	{
		icon: BOOK,
		title: 'Sections',
		link: '/sections',
	},
	{
		icon: GOAL,
		title: 'Goals',
		link: '/goals',
	},
	{
		icon: STATS,
		title: 'Statistics',
		link: '/statistics',
	},
]
