import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kqp5fccbo.css';
import '../../css/d/dhh47o0_z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kqp5fccbo"/><path class="dhh47o0_z"/></g>`,
		"fallback": "glyphs:wifi",
	});
}

export default Component;
