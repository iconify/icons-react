import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqt6r9oga.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqt6r9oga"/>`,
		"fallback": "streamline-flex:word-wrap-around-bounding-box",
	});
}

export default Component;
