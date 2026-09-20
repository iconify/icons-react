import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csi_j9bmm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csi_j9bmm"/>`,
		"fallback": "temaki:wind-turbine",
	});
}

export default Component;
