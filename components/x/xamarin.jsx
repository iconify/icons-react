import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjylu9y7r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjylu9y7r"/>`,
		"fallback": "thesvg-color:xamarin",
	});
}

export default Component;
