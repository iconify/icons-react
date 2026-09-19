import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygqv3cbus.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygqv3cbus"/>`,
		"fallback": "gis:wms",
	});
}

export default Component;
