import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9jnagbbl.css';
import '../../css/q/qthc_55up.css';
import '../../css/j/j7t5hzqcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGsEGyae0g" x1="0" x2="349.491" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="f9jnagbbl"/><stop offset="1" class="qthc_55up"/></linearGradient><path fill="url(#SVGsEGyae0g)" class="j7t5hzqcu"/>`,
		"fallback": "selfhst:weblate",
	});
}

export default Component;
