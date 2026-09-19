import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3dtwx_cf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3dtwx_cf"/>`,
		"fallback": "icon-park-outline:whistling",
	});
}

export default Component;
