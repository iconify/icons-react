import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuojs56aj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuojs56aj"/>`,
		"fallback": "dinkie-icons:wine-glass",
	});
}

export default Component;
