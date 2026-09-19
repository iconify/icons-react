import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq0baacen.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq0baacen"/>`,
		"fallback": "fa6-brands:youtube-square",
	});
}

export default Component;
