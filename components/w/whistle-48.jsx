import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pek7vnbxc.css';
import '../../css/y/ywj7khc9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pek7vnbxc"/><path class="ywj7khc9b"/>`,
		"fallback": "energy-icons:whistle-48",
	});
}

export default Component;
