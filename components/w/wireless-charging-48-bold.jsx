import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibs8b-b6s.css';
import '../../css/r/rh7lscyqa.css';
import '../../css/y/y6m516bwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibs8b-b6s"/><path class="rh7lscyqa"/><path class="y6m516bwj"/>`,
		"fallback": "energy-icons:wireless-charging-48-bold",
	});
}

export default Component;
