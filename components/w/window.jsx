import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz83exbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz83exbrs"/>`,
		"fallback": "tabler:window",
	});
}

export default Component;
