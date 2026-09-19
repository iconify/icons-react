import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufvr3ut2x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufvr3ut2x"/>`,
		"fallback": "dinkie-icons:white-dragon-mahjong",
	});
}

export default Component;
