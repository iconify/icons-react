import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j7cqu14cb.css';
import '../../css/x/xbdrabtly.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j7cqu14cb"/><path class="xbdrabtly"/></g>`,
		"fallback": "glyphs:window-duo",
	});
}

export default Component;
