import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rffsk5b0q.css';
import '../../css/x/xj3b16los.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rffsk5b0q"/><path class="xj3b16los"/></g>`,
		"fallback": "glyphs:wind",
	});
}

export default Component;
