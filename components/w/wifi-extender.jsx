import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf4c34b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf4c34b2n"/>`,
		"fallback": "cbi:wifi-extender",
	});
}

export default Component;
