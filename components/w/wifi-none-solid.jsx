import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq85p23jt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq85p23jt"/>`,
		"fallback": "teenyicons:wifi-none-solid",
	});
}

export default Component;
