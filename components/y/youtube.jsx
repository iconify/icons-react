import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tisyhd9pf.css';
import '../../css/u/udwyxyxbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tisyhd9pf"/><path class="udwyxyxbs"/></g>`,
		"fallback": "iconoir:youtube",
	});
}

export default Component;
