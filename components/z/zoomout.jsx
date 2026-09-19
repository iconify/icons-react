import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk15v_fiv.css';

const viewBox = {"width":717,"height":766};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk15v_fiv"/>`,
		"fallback": "ls:zoomout",
	});
}

export default Component;
