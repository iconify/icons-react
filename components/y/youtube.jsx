import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz_34wb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz_34wb2o"/>`,
		"fallback": "pixel:youtube",
	});
}

export default Component;
