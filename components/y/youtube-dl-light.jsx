import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lja0s1wsh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lja0s1wsh"/>`,
		"fallback": "selfhst:youtube-dl-light",
	});
}

export default Component;
