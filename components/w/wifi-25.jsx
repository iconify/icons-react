import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lczcj9hky.css';
import '../../css/h/hopt37k8i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lczcj9hky"/><path class="hopt37k8i"/></g>`,
		"fallback": "glyphs:wifi-25",
	});
}

export default Component;
