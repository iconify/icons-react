import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8fh6bcax.css';
import '../../css/b/bxc0s0-hm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8fh6bcax"/><path class="bxc0s0-hm"/>`,
		"fallback": "selfhst:woocommerce",
	});
}

export default Component;
