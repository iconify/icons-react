import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on7tvusxi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on7tvusxi"/>`,
		"fallback": "pinhead:y",
	});
}

export default Component;
