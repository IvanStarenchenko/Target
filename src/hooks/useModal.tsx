'use client'
import { useState } from 'react'

export function useModal() {
	const [modalType, setModalType] = useState<string>('')
	function openModal(type: string) {
		setModalType(type)
	}
	function handleModalClose() {
		setModalType('')
	}
	return {
		modalType,
		openModal,
		handleModalClose,
	}
}
