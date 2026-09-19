import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn_x9rbog.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yygk5x3fo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGBitEHdeU" class="xn_x9rbog"/></defs><g class="cuyn6tgcc"><use href="#SVGBitEHdeU"/><path clip-rule="evenodd" class="yygk5x3fo"/><use href="#SVGBitEHdeU"/></g>`,
		"fallback": "glyphs:wifi-100-bold",
	});
}

export default Component;
