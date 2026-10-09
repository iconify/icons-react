import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2jjx11ma.css';
import '../../css/v/vikp09bur.css';
import '../../css/o/o2pbh_bbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2jjx11ma"/><path class="vikp09bur"/><path class="o2pbh_bbb"/>`,
		"fallback": "energy-icons:whale-48",
	});
}

export default Component;
