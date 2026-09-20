import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trb9ibbhz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trb9ibbhz"/>`,
		"fallback": "selfhst:your-spotify-dark",
	});
}

export default Component;
