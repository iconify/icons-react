import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxcj_78hx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxcj_78hx"/>`,
		"fallback": "temaki:wheel",
	});
}

export default Component;
