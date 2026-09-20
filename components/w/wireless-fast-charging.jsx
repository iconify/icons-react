import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3s1jy8ea.css';
import '../../css/a/aybk0bbbx.css';
import '../../css/r/ryorw4bkl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u3s1jy8ea"/><path class="aybk0bbbx"/><path class="ryorw4bkl"/></g>`,
		"fallback": "streamline-flex-color:wireless-fast-charging",
	});
}

export default Component;
