import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w03tt64we.css';
import '../../css/g/gocezb5zs.css';
import '../../css/c/cv7o1ybwx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w03tt64we"/><path class="gocezb5zs"/><path class="cv7o1ybwx"/>`,
		"fallback": "fxemoji:whitesunsmallcloud",
	});
}

export default Component;
