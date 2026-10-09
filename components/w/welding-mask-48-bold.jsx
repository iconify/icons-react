import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v474uibgn.css';
import '../../css/z/z_74o5rqm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v474uibgn"/><path class="z_74o5rqm"/>`,
		"fallback": "energy-icons:welding-mask-48-bold",
	});
}

export default Component;
