import { SectionColors, type SectionColorKey } from '@/Const/SectionColors'
import { useSectionStore } from '@/store/section.store'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { Colors } from './Colors'
//import type {ISection} from '@/shared/types/sections'
const Modal = dynamic(() => import('@/Ui/Modal/Modal').then(mod => mod.Modal), {
	ssr: false,
})

interface IProps {
	onClose: () => void
}

export const schema = z.object({
	id: z.string().optional(),
	name: z.string().min(1, 'Название раздела обязательно'),
	color: z.enum(
		Object.keys(SectionColors) as [SectionColorKey, ...SectionColorKey[]]
	),
	plannedHours: z.number().min(1, 'Планируемые часы должны быть больше 0'),
})

export type TSection = z.infer<typeof schema>

export function CreateSection({ onClose }: IProps) {
	const { setSection } = useSectionStore()

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<TSection>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			color: 'Blue',
			plannedHours: 10,
		},
	})

	function onSubmit(data: TSection) {
		const item: TSection = {
			id: uuidv4(),
			...data,
		}
		setSection(item)
		onClose()
	}

	return (
		<Modal onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p className='text-left text-(--color) font-bold'>
					Добавить раздел обучения
				</p>

				<label className='flex flex-col gap-y-2 mb-3 mt-4 font-medium text-left'>
					<span>Название раздела</span>
					<input
						type='text'
						placeholder='Например: JavaScript'
						{...register('name')}
						className='w-full p-3 rounded-xl border border-gray-300 
                            focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
					/>
					{errors.name && (
						<p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
					)}
				</label>

				<Colors value={watch('color')} onSelect={c => setValue('color', c)} />

				<label className='flex flex-col gap-y-2 mb-3 mt-4 font-medium text-left'>
					<span>Планируемые часы</span>
					<input
						type='number'
						{...register('plannedHours', { valueAsNumber: true })}
						className='w-full p-3 rounded-xl border border-gray-300 
                            focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
					/>
					{errors.plannedHours && (
						<p className='text-red-500 text-sm mt-1'>
							{errors.plannedHours.message}
						</p>
					)}
				</label>

				<button
					type='submit'
					className='mt-4 w-full bg-blue-500 text-white p-3 rounded-xl font-medium hover:bg-blue-600 transition'
				>
					Создать раздел
				</button>
			</form>
		</Modal>
	)
}
