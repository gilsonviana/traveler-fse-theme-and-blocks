import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { Button, Panel, PanelBody, ToggleControl } from '@wordpress/components';
import { useState, useEffect, useCallback } from '@wordpress/element';

const Edit = ({ clientId, attributes, setAttributes, context }) => {
	const {
		image: {
			mediaId,
			mediaUrl,
			alt,
			caption,
			srcSet
		},
		title,
		author,
		useFeaturedImage
	} = attributes

	const [selectedMedia, setSelectedMedia] = useState(null)

	const {
		title: postTitle,
		author: postAuthorId,
		categories: categoriesId,
		featured_media: featuredMediaId
	} = useSelect((select) => {
		return select('core/editor').getCurrentPost();
	})
	const postAuthor = useSelect((select) => {
		return select('core').getUsers({ who: 'authors' })?.find((authors) => authors.id === postAuthorId);
	})

	const featuredMedia = useSelect((select) => {
		return select('core').getMedia(featuredMediaId)
	})

	const hasMainMedia = !!mediaId || !!selectedMedia

	const __generateSrcset = (media, isFeaturedImage) => {
		if (!media) return

		if (isFeaturedImage) {
			return Object.values(media?.media_details?.sizes).filter(({ url, width }) => url && width).map(({ url, width }) => `${url} ${width}w`).join(', ');
		}

		return Object.values(media?.sizes).filter(({ url, width }) => url && width).map(({ url, width }) => `${url} ${width}w`).join(', ')
	}

	const handleOnSelect = (media) => {
		const srcSet = __generateSrcset(media)
		setSelectedMedia(media)
		setAttributes({
			image: {
				mediaId: media.id,
				mediaUrl: media.url,
				caption: media.caption,
				alt: media.alt,
				srcSet
			}
		})
	}

	const handleOnToggle = () => {
		setAttributes({ useFeaturedImage: !useFeaturedImage })
	}

	const hydrateAttributes = useCallback(() => {
		setAttributes({
			title: postTitle,
			author: {
				id: postAuthor?.id,
				nickname: postAuthor?.nickname,
				link: postAuthor?.link
			}
		})
	}, [postTitle, postAuthor])

	useEffect(() => {
		if (useFeaturedImage) {
			const srcSet = __generateSrcset(featuredMedia, true)
			setSelectedMedia(featuredMedia)
			setAttributes({
				image: {
					mediaId: featuredMedia?.id,
					mediaUrl: featuredMedia?.source_url,
					caption: featuredMedia?.caption?.raw,
					alt: featuredMedia?.alt_text,
					srcSet
				}
			})
		} else if (selectedMedia) {
			const srcSet = __generateSrcset(selectedMedia)
			setSelectedMedia(selectedMedia)
			setAttributes({
				image: {
					mediaId: selectedMedia?.id,
					mediaUrl: selectedMedia?.url,
					caption: selectedMedia?.caption,
					alt: selectedMedia?.alt,
					srcSet
				}
			})
		}
	}, [useFeaturedImage, selectedMedia])

	useEffect(() => {
		hydrateAttributes()
	}, [hydrateAttributes])

	return (
		<section {...useBlockProps()}>
			<InspectorControls>
				<Panel className="traveler-fse-blocks-post-hero-inspector">
					<PanelBody title="Media Settings" initialOpen>
						<MediaUploadCheck>
							<MediaUpload
								value={mediaId}
								allowedTypes={['image']}
								onSelect={handleOnSelect}
								render={({ open }) => (
									<Button onClick={open} className={'media-settings-button'}>
										{!hasMainMedia ?
											'Open Media Gallery' : 'Replace Media'
										}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						<div style={{ margin: `1rem 0` }} />
						<ToggleControl
							label="Use featured image"
							help="This override the select media from media library."
							checked={useFeaturedImage}
							onChange={handleOnToggle}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
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
				<h1 className="traveler-fse-blocks-post-hero-title">{postTitle}</h1>
				{postAuthor?.link && postAuthor?.nickname && (
					<em className="traveler-fse-blocks-post-hero-byline">By&nbsp;
						<span>
							<a href={postAuthor.link} title=" Diana Hubbell" rel="author">{postAuthor.nickname}</a>
						</span>
					</em>
				)}
			</div>
		</section>
	);
}

export default Edit;
