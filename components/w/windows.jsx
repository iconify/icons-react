import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyt-qf0tm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyt-qf0tm"/>`,
		"fallback": "icon-park-solid:windows",
	});
}

export default Component;
