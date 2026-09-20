import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv_3vhb2h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv_3vhb2h"/>`,
		"fallback": "selfhst:wireguard-transparent-dark",
	});
}

export default Component;
