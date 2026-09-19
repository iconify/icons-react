import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iopupxb1m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iopupxb1m"/>`,
		"fallback": "fluent-mdl2:webcam-2-off",
	});
}

export default Component;
