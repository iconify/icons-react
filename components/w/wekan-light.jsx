import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwh_-fbqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwh_-fbqw"/>`,
		"fallback": "selfhst:wekan-light",
	});
}

export default Component;
