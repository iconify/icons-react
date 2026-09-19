import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmvg7-d7a.css';

const viewBox = {"width":470,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmvg7-d7a"/>`,
		"fallback": "file-icons:zork",
	});
}

export default Component;
