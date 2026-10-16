import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw2ccwbeu.css';
import '../../css/e/eyxhlubzl.css';
import '../../css/o/o25la7b3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw2ccwbeu"/><path class="eyxhlubzl"/><path class="o25la7b3q"/>`,
		"fallback": "energy-icons:wind-turbine-off-48",
	});
}

export default Component;
