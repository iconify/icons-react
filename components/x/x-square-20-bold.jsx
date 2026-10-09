import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fec4cjbkq.css';
import '../../css/o/ol1pcwf7g.css';
import '../../css/e/ecvl1ebjn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fec4cjbkq"/><path class="ol1pcwf7g"/><path class="ecvl1ebjn"/>`,
		"fallback": "energy-icons:x-square-20-bold",
	});
}

export default Component;
