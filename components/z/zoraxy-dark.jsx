import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwt866bmc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwt866bmc"/>`,
		"fallback": "selfhst:zoraxy-dark",
	});
}

export default Component;
