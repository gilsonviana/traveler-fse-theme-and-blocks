import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const INNER_BLOCKS_TEMPLATE = [
	['core/heading', { className: 'traveler-fse-blocks-heading' }]
];

const Edit = () => {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={INNER_BLOCKS_TEMPLATE} />
		</div>
	);
}

export default Edit;
