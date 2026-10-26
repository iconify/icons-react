import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/s5p35abnm.css';
import '../../css/u/ua2ho9bjf.css';
import '../../css/z/zv3mzcbgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="s5p35abnm"/><path class="ua2ho9bjf"/><path class="zv3mzcbgi"/></g>`,
		"fallback": "doodle-icons:zoom-in",
	});
}

export default Component;
