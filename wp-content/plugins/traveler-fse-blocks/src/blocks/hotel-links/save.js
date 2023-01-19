import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const { showTitle, isCustomTitle, customTitle } = attributes

	return (
		<div {...useBlockProps.save()}>
			{showTitle && !isCustomTitle && (
				<h2 className="traveler-fse-blocks-hotel-links-title">where to stay</h2>
			)}
			{showTitle && isCustomTitle && customTitle.trim() && (
				<h2 className="traveler-fse-blocks-hotel-links-custom-title">{customTitle}</h2>
			)}
			<InnerBlocks.Content />
		</div>
	);
}

export default Save;
