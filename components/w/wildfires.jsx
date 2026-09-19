import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf53ypbmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf53ypbmu"/>`,
		"fallback": "game-icons:wildfires",
	});
}

export default Component;
