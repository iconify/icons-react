import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mudghybxs.css';
import '../../css/r/rl1bej2cq.css';
import '../../css/e/e4fytv7eo.css';
import '../../css/p/peiacebhl.css';
import '../../css/g/g4oynsfqo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mudghybxs"/><path class="rl1bej2cq"/><path class="e4fytv7eo"/><path class="peiacebhl"/><path class="g4oynsfqo"/>`,
		"fallback": "energy-icons:wellhead-20-bold",
	});
}

export default Component;
