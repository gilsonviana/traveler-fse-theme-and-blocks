```{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 2,
	"name": "traveler-fse-blocks/heading",
	"version": "0.1.0",
	"title": "FSE: Heading",
	"category": "theme",
	"icon": "flag",
	"description": "A Gutenberg block.",
	"textdomain": "traveler-fse-blocks",
	"editorScript": ["file:./index.js", "traveler-fse-blocks-heading-editor-script"],
	"script": ["file:./script.js", "traveler-fse-blocks-heading-script"],
	"viewScript": ["file:./view.js", "traveler-fse-blocks-heading-view-script"],
	"editorStyle": ["file:./index.css", "traveler-fse-blocks-heading-editor-style"],
	"style": ["file:./style-index.css", "traveler-fse-blocks-heading-style"]
}
```

```
import domReady from '@wordpress/dom-ready';

domReady(() => {
  console.log('@wordpress/dom-ready --- temp block');
});
```

```
return select('core/block-editor').getBlock(clientId)
return select('core').getUsers({ who: 'authors' });
return select('core/block-editor').getTemplate();
return select('core/block-editor').getSettings();
return select('core/block-editor').getSelectedBlock();
return select('core/editor').getEditedPostContent();
return select('core/editor').getCurrentPost();
return select('core/editor').getEditorBlocks();
```

```
wp.blocks.serialize( wp.blocks.parse( wp.data.select( 'core/editor' ).getEditedPostContent() ) );
```