import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vek0mzq4d.css';
import '../../css/s/sf_tgu5lj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vek0mzq4d"/><path class="sf_tgu5lj"/>`,
		"fallback": "energy-icons:zero-emissions-48",
	});
}

export default Component;
