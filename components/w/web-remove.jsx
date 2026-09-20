import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl3_lhdlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl3_lhdlf"/>`,
		"fallback": "mdi:web-remove",
	});
}

export default Component;
