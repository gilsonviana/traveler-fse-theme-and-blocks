import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const INNER_BLOCKS_TEMPLATE = [
	['core/post-title', { className: 'traveler-fse-blocks-post-title' }]
];

const Edit = () => {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={INNER_BLOCKS_TEMPLATE} templateLock="all" />
		</div>
	);
}

export default Edit;
