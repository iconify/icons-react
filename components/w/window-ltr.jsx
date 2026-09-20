import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3epgsb1m.css';
import '../../css/h/hu6j50bjd.css';
import '../../css/f/f_ebgjbid.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3epgsb1m"/><path class="hu6j50bjd"/><circle class="f_ebgjbid"/>`,
		"fallback": "ooui:window-ltr",
	});
}

export default Component;
