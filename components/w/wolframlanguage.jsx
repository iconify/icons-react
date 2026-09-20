import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m38zlzbtp.css';
import '../../css/i/iv4nqz7tn.css';
import '../../css/f/f6g8zlbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(-.009 -.001)scale(.12121)"><circle class="m38zlzbtp"/><path class="iv4nqz7tn"/><path class="f6g8zlbat"/></g>`,
		"fallback": "material-icon-theme:wolframlanguage",
	});
}

export default Component;
