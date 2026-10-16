import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgre77bfz.css';
import '../../css/p/pk8m0abcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgre77bfz"/><path class="pk8m0abcd"/>`,
		"fallback": "energy-icons:wire-stripper-48",
	});
}

export default Component;
