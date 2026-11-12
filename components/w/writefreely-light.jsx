import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwapn2_9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwapn2_9l"/>`,
		"fallback": "selfhst:writefreely-light",
	});
}

export default Component;
