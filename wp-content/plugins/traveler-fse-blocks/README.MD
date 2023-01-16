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