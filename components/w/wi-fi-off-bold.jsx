import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdw0b213e.css';
import '../../css/n/nlt59cbzt.css';
import '../../css/l/l101akbav.css';
import '../../css/b/bs-gs5b8g.css';
import '../../css/h/hrsx7x7qc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdw0b213e"/><path class="nlt59cbzt"/><path class="l101akbav"/><path class="bs-gs5b8g"/><path class="hrsx7x7qc"/>`,
		"fallback": "solar:wi-fi-off-bold",
	});
}

export default Component;
