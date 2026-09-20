import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txy4kbrsi.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txy4kbrsi"/>`,
		"fallback": "map:zoom-out",
	});
}

export default Component;
