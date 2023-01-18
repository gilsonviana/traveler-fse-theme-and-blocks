import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

const INNER_BLOCKS_TEMPLATE = [
	['core/image', { className: 'traveler-fse-blocks-post-hero-image', sizeSlug: 'full' }],
	['core/paragraph', { className: 'traveler-fse-blocks-post-hero-caption', content: 'Caption Here' }],
	['core/post-title', { className: 'traveler-fse-blocks-post-hero-title', textAlign: 'center' }],
	['core/post-author', { className: 'traveler-fse-blocks-post-hero-author', showAvatar: false, byline: "By " }]
];

const Edit = ({ clientId }) => {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(undefined, { template: INNER_BLOCKS_TEMPLATE, templateLock: 'all' });
	const { innerBlocks } = useSelect((select) => {
		return select('core/block-editor').getBlock(clientId)
	}, []);

	console.log(innerBlocks[0].attributes.alt)

	return (
		<section {...blockProps}>
			<div {...innerBlocksProps} />
		</section>
	);
}

export default Edit;
