import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu3q8dilk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu3q8dilk"/>`,
		"fallback": "selfhst:zammad-light",
	});
}

export default Component;
