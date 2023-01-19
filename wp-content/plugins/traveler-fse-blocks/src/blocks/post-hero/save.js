import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const {
		image: {
			mediaId,
			mediaUrl,
			alt,
			caption,
			srcSet
		},
		title,
		author
	} = attributes

	return (
		<div {...useBlockProps.save()}>
			<figure className="traveler-fse-blocks-post-hero-image">
				<img
					loading="lazy"
					decoding="async"
					src={mediaUrl}
					alt={alt}
					srcSet={srcSet}
				/>
			</figure>
			<div className="traveler-fse-blocks-post-hero-box">
				<p className="traveler-fse-blocks-post-hero-caption">{caption}</p>
				<h1 className="traveler-fse-blocks-post-hero-title">{title}</h1>
				{author?.link && author?.nickname && (
					<em className="traveler-fse-blocks-post-hero-byline">By&nbsp;
						<span>
							<a href={author.link} title=" Diana Hubbell" rel="author">{author.nickname}</a>
						</span>
					</em>
				)}
			</div>
		</div>
	);
}

export default Save;
