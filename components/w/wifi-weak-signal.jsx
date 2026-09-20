import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olzhhdczn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olzhhdczn"/>`,
		"fallback": "pinhead:wifi-weak-signal",
	});
}

export default Component;
