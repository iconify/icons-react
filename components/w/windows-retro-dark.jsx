import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu8nvy21f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu8nvy21f"/>`,
		"fallback": "selfhst:windows-retro-dark",
	});
}

export default Component;
