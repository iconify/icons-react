import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv842m9yr.css';
import '../../css/r/rycvim_ja.css';
import '../../css/h/h49_-cc9y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv842m9yr"/><path class="rycvim_ja"/><path class="h49_-cc9y"/>`,
		"fallback": "energy-icons:weir-20-bold",
	});
}

export default Component;
