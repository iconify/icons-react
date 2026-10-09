import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdg210b0m.css';
import '../../css/y/yacgnsfyw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdg210b0m"/><path class="yacgnsfyw"/>`,
		"fallback": "energy-icons:wine-bottle-20",
	});
}

export default Component;
