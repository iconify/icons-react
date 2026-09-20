import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bjv1g1qic.css';
import '../../css/h/hu2pvqkyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bjv1g1qic"/><path class="hu2pvqkyl"/></g>`,
		"fallback": "streamline:wifi",
	});
}

export default Component;
