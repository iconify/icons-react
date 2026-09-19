import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l45a9sbog.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l45a9sbog"/>`,
		"fallback": "cryptocurrency:xmg",
	});
}

export default Component;
