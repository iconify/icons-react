import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hftzc6bjl.css';
import '../../css/g/gwf5562uo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hftzc6bjl"/><path class="gwf5562uo"/>`,
		"fallback": "energy-icons:wind-blade-48",
	});
}

export default Component;
