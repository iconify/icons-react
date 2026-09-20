import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgzblob0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgzblob0s"/>`,
		"fallback": "selfhst:xxl-sports-light",
	});
}

export default Component;
