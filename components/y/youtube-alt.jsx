import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2y8962pf.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2y8962pf"/>`,
		"fallback": "ps:youtube-alt",
	});
}

export default Component;
