import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkt0gbpax.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkt0gbpax"/>`,
		"fallback": "dinkie-icons:white-dragon-mahjong-filled",
	});
}

export default Component;
