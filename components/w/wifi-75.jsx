import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lczcj9hky.css';
import '../../css/h/hyc1pwdsg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lczcj9hky"/><path class="hyc1pwdsg"/></g>`,
		"fallback": "glyphs:wifi-75",
	});
}

export default Component;
