import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5pk8r8ai.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5pk8r8ai"/>`,
		"fallback": "temaki:whale-watching",
	});
}

export default Component;
