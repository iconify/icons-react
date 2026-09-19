import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgmyvbbuo.css';
import '../../css/q/qmvfbubxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgmyvbbuo"/><path class="qmvfbubxl"/>`,
		"fallback": "carbon:zoom-in-area",
	});
}

export default Component;
