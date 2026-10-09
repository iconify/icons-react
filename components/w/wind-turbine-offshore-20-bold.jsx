import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veuvy42df.css';
import '../../css/w/wbu9xubvi.css';
import '../../css/u/uqxypgxuv.css';
import '../../css/k/k15ksg7ur.css';
import '../../css/j/j636xlncp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veuvy42df"/><path class="wbu9xubvi"/><path class="uqxypgxuv"/><path class="k15ksg7ur"/><path class="j636xlncp"/>`,
		"fallback": "energy-icons:wind-turbine-offshore-20-bold",
	});
}

export default Component;
