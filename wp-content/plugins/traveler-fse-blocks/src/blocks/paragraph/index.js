import { registerBlockType, createBlock } from '@wordpress/blocks';

import edit from './edit';
import save from './save';
import metadata from './block.json';

import './editor.scss';
import './style.scss';

registerBlockType( metadata.name, {
	edit,
	save,
	transforms: {
		from: [{
			type: 'block',
			priority: 7,
			blocks: ['core/paragraph'],
			transform: ({ content }) => {
				const innerBlocks = createBlock('core/paragraph', { content })
				const block = createBlock(metadata.name, {}, [innerBlocks])
				return block
			}
		}],
		to: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: (_, innerBlocks) => createBlock('core/paragraph', { content: innerBlocks[0].attributes.content })
		}]
	}
} );
