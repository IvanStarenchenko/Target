'use client'

import { createPortal } from 'react-dom'

type ModalProps = {
	//isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export function Modal({ onClose, children }: ModalProps) {
	const portalRoot = document.getElementById('portal-root')
	if (!portalRoot) return null

	return createPortal(
		<div
			className='fixed inset-0 flex items-center justify-center z-50'
			onClick={onClose}
		>
			<div className='absolute inset-0 bg-white/60 backdrop-blur-sm' />
			<div
				className='relative bg-white rounded-3xl shadow-2xl p-8 w-96 max-w-[90vw] text-center'
				onClick={e => e.stopPropagation()}
			>
				{children}
				<button
					onClick={onClose}
					className='absolute  top-4 right-4 text-3xl  cursor-pointer'
				>
					<span className='text-black'>× </span>
				</button>
			</div>
		</div>,
		portalRoot
	)
}
