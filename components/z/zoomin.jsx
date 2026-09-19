import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwys74b8r.css';

const viewBox = {"width":717,"height":766};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwys74b8r"/>`,
		"fallback": "ls:zoomin",
	});
}

export default Component;
