import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra4xehcyp.css';
import '../../css/z/zj7rmmb0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra4xehcyp"/><path class="zj7rmmb0e"/>`,
		"fallback": "selfhst:windmill-light",
	});
}

export default Component;
