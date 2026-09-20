import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7wtdabgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7wtdabgj"/>`,
		"fallback": "selfhst:youtube-dark",
	});
}

export default Component;
