import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp0h-lbxu.css';
import '../../css/n/nlt59cbzt.css';
import '../../css/l/l101akbav.css';
import '../../css/b/bs-gs5b8g.css';
import '../../css/h/h4ymgcbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp0h-lbxu"/><path class="nlt59cbzt"/><path class="l101akbav"/><path class="bs-gs5b8g"/><path class="h4ymgcbxq"/>`,
		"fallback": "solar:wi-fi-off-outline",
	});
}

export default Component;
