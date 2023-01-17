import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const INNER_BLOCKS_TEMPLATE = [
	['core/paragraph', { className: 'traveler-fse-blocks-paragraph' }]
];

const Edit = () => {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={INNER_BLOCKS_TEMPLATE} templateLock="all" />
		</div>
	);
}

export default Edit;
