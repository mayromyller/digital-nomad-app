import { Box } from '@/src/components/box/box'
import { SearchInput } from '@/src/components/search-input/search-input'
import { useState } from 'react'

export function CityFilter() {
	const [name, setName] = useState('')
	return (
		<Box>
			<SearchInput
				value={name}
				onChangeText={setName}
				placeholder="Qual seu próximo destino?"
			/>
		</Box>
	)
}
