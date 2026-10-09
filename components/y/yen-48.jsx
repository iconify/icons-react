import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxeqiccct.css';
import '../../css/t/t2smvv9rt.css';
import '../../css/c/cyixzxmdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxeqiccct"/><path class="t2smvv9rt"/><path class="cyixzxmdi"/>`,
		"fallback": "energy-icons:yen-48",
	});
}

export default Component;
