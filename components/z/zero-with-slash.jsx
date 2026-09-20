import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk-w0bb5t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk-w0bb5t"/>`,
		"fallback": "pinhead:zero-with-slash",
	});
}

export default Component;
