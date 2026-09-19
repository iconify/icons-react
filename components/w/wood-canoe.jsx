import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trutf_b7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trutf_b7l"/>`,
		"fallback": "game-icons:wood-canoe",
	});
}

export default Component;
