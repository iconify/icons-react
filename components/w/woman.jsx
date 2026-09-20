import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nss6r-b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nss6r-b7n"/>`,
		"fallback": "reicon:woman",
	});
}

export default Component;
