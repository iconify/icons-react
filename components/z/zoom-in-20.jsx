import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsx9bkbtz.css';
import '../../css/g/gq2n7-bry.css';
import '../../css/m/munnn-b_e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsx9bkbtz"/><path class="gq2n7-bry"/><path class="munnn-b_e"/>`,
		"fallback": "energy-icons:zoom-in-20",
	});
}

export default Component;
