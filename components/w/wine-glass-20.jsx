import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2g-f1blp.css';
import '../../css/w/wut29u08z.css';
import '../../css/x/x1osh-brd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2g-f1blp"/><path class="wut29u08z"/><path class="x1osh-brd"/>`,
		"fallback": "energy-icons:wine-glass-20",
	});
}

export default Component;
