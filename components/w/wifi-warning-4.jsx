import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xey_aqbpp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xey_aqbpp"/>`,
		"fallback": "fluent-mdl2:wifi-warning-4",
	});
}

export default Component;
