import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqe1hxm4o.css';
import '../../css/s/s7rqtiajo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqe1hxm4o"/><path class="s7rqtiajo"/>`,
		"fallback": "carbon:windy-strong",
	});
}

export default Component;
