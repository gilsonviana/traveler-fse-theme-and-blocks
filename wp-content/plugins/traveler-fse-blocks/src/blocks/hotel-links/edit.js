import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor'
import { TextControl, Panel, PanelBody, ToggleControl } from '@wordpress/components';

const INNER_BLOCKS_TEMPLATE = [
	['core/group', { className: 'traveler-fse-blocks-hotel-links-list' }, [
		['core/list']
	]]
]

const Edit = ({ attributes, setAttributes }) => {
	const { showTitle, isCustomTitle, customTitle } = attributes

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Panel>
					<PanelBody title="Settings" initialOpen>
						<ToggleControl 
							label="Show title"
							checked={showTitle}
							onChange={() => setAttributes({ showTitle: !showTitle })}
						/>
						<div style={{ margin: `1rem 0` }}/>
						<ToggleControl 
							label="Custom title"
							help="Allow custom title insertion."
							checked={isCustomTitle}
							onChange={() => setAttributes({ isCustomTitle: !isCustomTitle })}
						/>
						<div style={{ margin: `1rem 0` }}/>
						{isCustomTitle && (
							<TextControl
								label="Custom title"
								value={customTitle}
								onChange={(text) => setAttributes({ customTitle: text })}
							/>
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>
			{showTitle && !isCustomTitle && (
				<h2 className="traveler-fse-blocks-hotel-links-title">where to stay</h2>
			)}
			{showTitle && isCustomTitle && customTitle?.trim() && (
				<h2 className="traveler-fse-blocks-hotel-links-custom-title">{customTitle}</h2>
			)}
			<InnerBlocks template={INNER_BLOCKS_TEMPLATE} />
		</div>
	);
}

export default Edit;
