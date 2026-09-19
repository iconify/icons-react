import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw1xjyb6k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw1xjyb6k"/>`,
		"fallback": "game-icons:wood-stick",
	});
}

export default Component;
