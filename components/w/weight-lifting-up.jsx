import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpx5clbzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpx5clbzg"/>`,
		"fallback": "game-icons:weight-lifting-up",
	});
}

export default Component;
