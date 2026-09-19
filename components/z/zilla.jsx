import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdit_gbux.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdit_gbux"/>`,
		"fallback": "cryptocurrency:zilla",
	});
}

export default Component;
