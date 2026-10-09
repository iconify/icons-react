import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcuvsac6i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcuvsac6i"/>`,
		"fallback": "energy-icons:woodchip-20",
	});
}

export default Component;
