import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwxp7xb5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwxp7xb5e"/>`,
		"fallback": "selfhst:z-wave-js-ui-dark",
	});
}

export default Component;
