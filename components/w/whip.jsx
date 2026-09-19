import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx7tqac6y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx7tqac6y"/>`,
		"fallback": "game-icons:whip",
	});
}

export default Component;
