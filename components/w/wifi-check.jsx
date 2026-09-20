import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b43xt4hkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b43xt4hkk"/>`,
		"fallback": "mynaui:wifi-check",
	});
}

export default Component;
