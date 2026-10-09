import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oepi3hb8j.css';
import '../../css/m/mvcr2gb0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oepi3hb8j"/><path class="mvcr2gb0y"/>`,
		"fallback": "energy-icons:wind-speed-48",
	});
}

export default Component;
