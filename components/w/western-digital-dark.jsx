import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh21_cckm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh21_cckm"/>`,
		"fallback": "selfhst:western-digital-dark",
	});
}

export default Component;
