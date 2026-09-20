import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6u949tnp.css';
import '../../css/u/uxjv9458g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6u949tnp"/><path class="uxjv9458g"/>`,
		"fallback": "selfhst:yarr",
	});
}

export default Component;
