import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq0240abk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq0240abk"/>`,
		"fallback": "pinhead:x-cross",
	});
}

export default Component;
