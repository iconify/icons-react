import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otu-ipbqt.css';
import '../../css/q/q1xmknq-a.css';
import '../../css/s/s50abdb3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otu-ipbqt"/><path class="q1xmknq-a"/><path class="s50abdb3y"/>`,
		"fallback": "energy-icons:wind-turbine-off-48-bold",
	});
}

export default Component;
