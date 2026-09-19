import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qew_s-bcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qew_s-bcz"/>`,
		"fallback": "game-icons:world",
	});
}

export default Component;
