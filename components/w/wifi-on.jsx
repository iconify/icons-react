import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3sadsbjv.css';
import '../../css/h/hy-spriyj.css';
import '../../css/a/aa5zgnp3b.css';
import '../../css/h/hcphdfbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3sadsbjv"/><path class="hy-spriyj"/><path class="aa5zgnp3b"/><circle class="hcphdfbte"/>`,
		"fallback": "circum:wifi-on",
	});
}

export default Component;
