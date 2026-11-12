import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am2cvt6mb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am2cvt6mb"/>`,
		"fallback": "selfhst:whisparr-light",
	});
}

export default Component;
