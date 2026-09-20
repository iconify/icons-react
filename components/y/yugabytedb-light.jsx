import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wds76yb_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wds76yb_c"/>`,
		"fallback": "selfhst:yugabytedb-light",
	});
}

export default Component;
