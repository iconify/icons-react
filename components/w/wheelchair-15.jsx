import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m88vfibvp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m88vfibvp"/>`,
		"fallback": "maki:wheelchair-15",
	});
}

export default Component;
