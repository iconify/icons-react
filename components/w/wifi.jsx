import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcvm4-bpr.css';
import '../../css/m/mdxhb0bme.css';
import '../../css/s/ss0le4b0t.css';
import '../../css/a/aam2fvvmq.css';
import '../../css/j/j9m8ctbnv.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGl6kMrI8J" class="hcvm4-bpr"/><path id="SVGB29e7djA" class="mdxhb0bme"/><path id="SVG3i9oCczf" class="ss0le4b0t"/></defs><g class="aam2fvvmq"><use href="#SVGl6kMrI8J"/><use href="#SVGB29e7djA"/><use href="#SVG3i9oCczf"/><circle class="j9m8ctbnv"/></g><g class="ij2x_72vy"><use href="#SVGl6kMrI8J"/><use href="#SVGB29e7djA"/><use href="#SVG3i9oCczf"/><circle class="j9m8ctbnv"/></g>`,
		"fallback": "openmoji:wifi",
	});
}

export default Component;
