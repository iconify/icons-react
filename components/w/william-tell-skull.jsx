import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p389vfbtf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p389vfbtf"/>`,
		"fallback": "game-icons:william-tell-skull",
	});
}

export default Component;
