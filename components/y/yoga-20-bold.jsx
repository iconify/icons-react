import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0h130b3n.css';
import '../../css/f/fml2kccmr.css';
import '../../css/s/se5adobpm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0h130b3n"/><path class="fml2kccmr"/><path class="se5adobpm"/>`,
		"fallback": "energy-icons:yoga-20-bold",
	});
}

export default Component;
