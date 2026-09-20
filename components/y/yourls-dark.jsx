import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emhy2jo_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emhy2jo_m"/>`,
		"fallback": "selfhst:yourls-dark",
	});
}

export default Component;
