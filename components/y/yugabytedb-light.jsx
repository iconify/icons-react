import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lob7ambba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lob7ambba"/>`,
		"fallback": "selfhst:yugabytedb-light",
	});
}

export default Component;
