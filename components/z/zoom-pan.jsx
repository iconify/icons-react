import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwtn5pbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwtn5pbne"/>`,
		"fallback": "tabler:zoom-pan",
	});
}

export default Component;
