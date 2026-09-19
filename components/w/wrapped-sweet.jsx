import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp-ij2bmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp-ij2bmd"/>`,
		"fallback": "game-icons:wrapped-sweet",
	});
}

export default Component;
