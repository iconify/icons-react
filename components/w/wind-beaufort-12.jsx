import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vryv1t93k.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vryv1t93k"/>`,
		"fallback": "wi:wind-beaufort-12",
	});
}

export default Component;
