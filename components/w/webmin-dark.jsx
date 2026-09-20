import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anam2owfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anam2owfk"/>`,
		"fallback": "selfhst:webmin-dark",
	});
}

export default Component;
