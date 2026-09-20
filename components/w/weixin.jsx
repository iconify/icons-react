import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br2pizl5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br2pizl5h"/>`,
		"fallback": "la:weixin",
	});
}

export default Component;
