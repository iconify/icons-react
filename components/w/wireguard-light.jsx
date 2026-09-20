import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g64-eqzac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g64-eqzac"/>`,
		"fallback": "selfhst:wireguard-light",
	});
}

export default Component;
