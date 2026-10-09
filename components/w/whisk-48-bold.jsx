import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3_6xbay.css';
import '../../css/w/w9clkgbaa.css';
import '../../css/b/bcto3bbby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm3_6xbay"/><path class="w9clkgbaa"/><path class="bcto3bbby"/>`,
		"fallback": "energy-icons:whisk-48-bold",
	});
}

export default Component;
