import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp8l54blm.css';
import '../../css/u/udr_1ybfu.css';
import '../../css/y/ymqwf0tfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp8l54blm"/><path class="udr_1ybfu"/><path class="ymqwf0tfs"/>`,
		"fallback": "energy-icons:yen-48-bold",
	});
}

export default Component;
