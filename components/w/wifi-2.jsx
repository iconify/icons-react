import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3v4iib0v.css';
import '../../css/m/m364hlh3h.css';
import '../../css/l/l97nb-quh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3v4iib0v"/><path class="m364hlh3h"/><circle class="l97nb-quh"/>`,
		"fallback": "bx:wifi-2",
	});
}

export default Component;
