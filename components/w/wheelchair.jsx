import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2lj41ayi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2lj41ayi"/>`,
		"fallback": "fa6-solid:wheelchair",
	});
}

export default Component;
