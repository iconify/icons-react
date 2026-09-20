import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voaf05beg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voaf05beg"/>`,
		"fallback": "selfhst:yunohost-dark",
	});
}

export default Component;
