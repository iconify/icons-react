import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn4_-syio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn4_-syio"/>`,
		"fallback": "selfhst:wrtag",
	});
}

export default Component;
