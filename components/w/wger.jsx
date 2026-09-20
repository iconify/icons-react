import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjgp6ub7i.css';
import '../../css/e/epzlemb8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjgp6ub7i"/><path class="epzlemb8k"/>`,
		"fallback": "selfhst:wger",
	});
}

export default Component;
