import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nsrnn6v1o.css';
import '../../css/y/y9huowb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nsrnn6v1o"/><path class="y9huowb0i"/></g>`,
		"fallback": "thesvg:xinference",
	});
}

export default Component;
