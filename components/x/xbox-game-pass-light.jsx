import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbch7jb7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbch7jb7n"/>`,
		"fallback": "selfhst:xbox-game-pass-light",
	});
}

export default Component;
