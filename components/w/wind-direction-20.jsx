import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_rzrek6p.css';
import '../../css/v/vqp7s7b9z.css';
import '../../css/r/rbecf_bsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_rzrek6p"/><path class="vqp7s7b9z"/><path class="rbecf_bsv"/>`,
		"fallback": "energy-icons:wind-direction-20",
	});
}

export default Component;
