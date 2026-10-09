import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj3zoshwv.css';
import '../../css/v/vlib7y67t.css';
import '../../css/d/duqi8c8_l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj3zoshwv"/><path class="vlib7y67t"/><path class="duqi8c8_l"/>`,
		"fallback": "energy-icons:zoom-in-20-bold",
	});
}

export default Component;
