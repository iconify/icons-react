import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/a/ao8tfwf5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="hwsal5q-o"/><path class="ao8tfwf5a"/></g>`,
		"fallback": "lets-icons:world-light",
	});
}

export default Component;
