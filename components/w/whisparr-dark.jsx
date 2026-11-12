import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e39b9hkls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e39b9hkls"/>`,
		"fallback": "selfhst:whisparr-dark",
	});
}

export default Component;
