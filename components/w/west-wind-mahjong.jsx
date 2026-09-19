import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdafhn1uk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdafhn1uk"/>`,
		"fallback": "dinkie-icons:west-wind-mahjong",
	});
}

export default Component;
