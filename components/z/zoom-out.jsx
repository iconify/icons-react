import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pybw4bq1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pybw4bq1i"/>`,
		"fallback": "mage:zoom-out",
	});
}

export default Component;
