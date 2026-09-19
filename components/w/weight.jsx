import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boq9-pb_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="boq9-pb_a"/>`,
		"fallback": "healthicons:weight",
	});
}

export default Component;
