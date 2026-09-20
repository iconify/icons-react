import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wu1i7b1lc.css';
import '../../css/o/ogaq-nb0k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wu1i7b1lc"/><path class="ogaq-nb0k"/></g>`,
		"fallback": "streamline-flex:wifi-secure-connection",
	});
}

export default Component;
