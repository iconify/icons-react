import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie3v5gb6w.css';
import '../../css/k/k4oej8buw.css';
import '../../css/h/h1qcumj4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie3v5gb6w"/><path class="k4oej8buw"/><path class="h1qcumj4c"/>`,
		"fallback": "energy-icons:whisk-20",
	});
}

export default Component;
