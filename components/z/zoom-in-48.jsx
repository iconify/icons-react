import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkje3ybpz.css';
import '../../css/u/u90tapbtx.css';
import '../../css/n/neiwdiudh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkje3ybpz"/><path class="u90tapbtx"/><path class="neiwdiudh"/>`,
		"fallback": "energy-icons:zoom-in-48",
	});
}

export default Component;
