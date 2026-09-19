import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duuf9m24f.css';
import '../../css/h/h8p6cfbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="duuf9m24f"/><path class="h8p6cfbln"/>`,
		"fallback": "eva:wifi-off-fill",
	});
}

export default Component;
