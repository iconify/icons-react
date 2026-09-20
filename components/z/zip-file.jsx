import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k7v6wxxvt.css';
import '../../css/m/m14ix2tjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k7v6wxxvt"/><path class="m14ix2tjj"/></g>`,
		"fallback": "streamline-sharp-color:zip-file",
	});
}

export default Component;
