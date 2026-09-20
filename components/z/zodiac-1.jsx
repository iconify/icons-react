import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vp_sfccwb.css';
import '../../css/k/k-v5flb4u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vp_sfccwb"/><path class="k-v5flb4u"/></g>`,
		"fallback": "streamline:zodiac-1",
	});
}

export default Component;
