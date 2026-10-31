import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rny_ojbdv.css';
import '../../css/j/j01iy8biv.css';
import '../../css/g/g-k4n4b7m.css';
import '../../css/e/ef99ei22g.css';
import '../../css/e/e3sz6nb9b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rny_ojbdv"/><path class="j01iy8biv"/><path class="g-k4n4b7m"/><path class="ef99ei22g"/><path class="e3sz6nb9b"/>`,
		"fallback": "iconito:wine",
	});
}

export default Component;
