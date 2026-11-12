import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i71qmgjcm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i71qmgjcm"/>`,
		"fallback": "selfhst:windows-retro-dark",
	});
}

export default Component;
