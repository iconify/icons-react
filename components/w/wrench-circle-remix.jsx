import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7xiwkbbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o7xiwkbbv"/>`,
		"fallback": "streamline-plump:wrench-circle-remix",
	});
}

export default Component;
