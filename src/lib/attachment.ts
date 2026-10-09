import type { Attachment } from 'svelte/attachments'
import type { Callback } from './render'
import { register, unregister } from './state'

export interface Options {
	date: Date | number
	locale?: string
	live?: boolean
}

export function relativeTime(options: Options): Attachment<HTMLElement> {
	return (node) => {
		const callback: Callback = ({ text }) => (node.textContent = text)
		const date = options.date
		const locale = options.locale ?? navigator.language
		const live = options.live ?? true

		register(node, date, locale, live, callback)

		return () => unregister(node)
	}
}
