import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekct923ui.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekct923ui"/>`,
		"fallback": "selfhst:xbackbone-dark",
	});
}

export default Component;
