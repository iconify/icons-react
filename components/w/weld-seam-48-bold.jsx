import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmvltcbxl.css';
import '../../css/f/fhr9nlrmx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmvltcbxl"/><path class="fhr9nlrmx"/>`,
		"fallback": "energy-icons:weld-seam-48-bold",
	});
}

export default Component;
