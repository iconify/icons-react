import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqnly8k0c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqnly8k0c"/>`,
		"fallback": "cib:zulip",
	});
}

export default Component;
